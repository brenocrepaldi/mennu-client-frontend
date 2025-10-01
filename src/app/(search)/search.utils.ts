import { useCallback } from 'react';
import { IProduct, IRestaurant } from '../../types/restaurant';

export const useSearchUtils = () => {
	// Normalize text for better search matching
	const normalizeText = useCallback((text: string): string => {
		return text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Remove accents
			.trim();
	}, []);

	// Advanced search function with scoring
	const searchProducts = useCallback(
		(query: string, restaurant: IRestaurant): IProduct[] => {
			const normalizedQuery = normalizeText(query);
			const queryWords = normalizedQuery.split(/\s+/).filter((word) => word.length > 0);

			const results = restaurant.menu
				.map((item) => {
					const normalizedName = normalizeText(item.name);
					const normalizedDescription = normalizeText(item.description);
					const normalizedCategory = normalizeText(item.category);

					let score = 0;
					let matches = 0;

					queryWords.forEach((word) => {
						// Exact name match (highest priority)
						if (normalizedName === word) {
							score += 100;
							matches++;
						}
						// Name starts with query (high priority)
						else if (normalizedName.startsWith(word)) {
							score += 50;
							matches++;
						}
						// Name contains query (medium priority)
						else if (normalizedName.includes(word)) {
							score += 30;
							matches++;
						}
						// Description contains query (low priority)
						else if (normalizedDescription.includes(word)) {
							score += 10;
							matches++;
						}
						// Category match (medium priority)
						else if (normalizedCategory.includes(word)) {
							score += 20;
							matches++;
						}
					});

					// Bonus for matching all words
					if (matches === queryWords.length && queryWords.length > 1) {
						score += 25;
					}

					return { item, score, matches };
				})
				.filter((result) => result.matches > 0)
				.sort((a, b) => {
					// Sort by score (descending), then by name (ascending)
					if (b.score !== a.score) {
						return b.score - a.score;
					}
					return a.item.name.localeCompare(b.item.name);
				})
				.map((result) => result.item);

			return results;
		},
		[normalizeText]
	);

	return { searchProducts };
};

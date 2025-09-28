import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { categorizeItems, getAllCategories } from '../../utils/restaurantUtils';
import { useSearchUtils } from './search.utils';

export const useSearchModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const categories = getAllCategories(restaurant.menu);
	const categorizedItems = categorizeItems(restaurant.menu);
	const [searchMode, setSearchMode] = useState(false);
	const { searchProducts } = useSearchUtils();

	const MAX_SEARCH_LENGTH = 200;
	const DEBOUNCE_DELAY = 300;

	const [searchText, setSearchText] = useState<string>('');
	const [debouncedSearchText, setDebouncedSearchText] = useState<string>('');
	const [isSearching, setIsSearching] = useState(false);

	// Debounce search text
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchText(searchText);
		}, DEBOUNCE_DELAY);

		return () => clearTimeout(timer);
	}, [searchText]);

	// Memoized search results
	const searchResults = useMemo(() => {
		if (!debouncedSearchText.trim()) {
			return [];
		}
		return searchProducts(debouncedSearchText, restaurant);
	}, [debouncedSearchText, restaurant, searchProducts]);

	useEffect(() => {
		setIsSearching(searchText !== debouncedSearchText);
	}, [searchResults, searchText, debouncedSearchText]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const clearSearch = useCallback(() => {
		setSearchText('');
		setSearchMode(false);
	}, []);

	const hasResults = searchResults.length > 0;

	return {
		navigate,
		categories,
		categorizedItems,
		searchMode,
		setSearchMode,
		searchText,
		searchResults,
		isSearching,
		hasResults,
		MAX_SEARCH_LENGTH,
		clearSearch,
		handleSearchChange,
	};
};

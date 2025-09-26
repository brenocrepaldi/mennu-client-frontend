import { IProduct } from '../../types';

export const useMenuUtils = () => {
	const categorizeMenuByCategory = (menu: IProduct[]) => {
		return menu.reduce((acc, item) => {
			// Initialize category if it doesn't exist
			if (!acc[item.category]) {
				acc[item.category] = [];
			}

			// Add product to the corresponding category
			acc[item.category].push(item);
			return acc;
		}, {} as Record<string, IProduct[]>);
	};

	const scrollToCategory = (category: string) => {
		// Find the category button and container for horizontal scroll
		const categoryButton = document.getElementById(`${category}-button`);
		const categoryContainer = document.querySelector('.category-list-container') as HTMLElement;

		if (categoryButton && categoryContainer) {
			const offset = 50; // Offset for smooth positioning

			// Scroll the category container horizontally
			categoryContainer.scrollTo({
				left: categoryButton.offsetLeft - offset,
				behavior: 'smooth',
			});

			// Find the product section for the selected category
			const productSection = document.getElementById(category);
			if (productSection) {
				const sectionOffset = 50; // Offset for vertical scrolling
				const sectionPosition = productSection.getBoundingClientRect().top + window.scrollY;

				// Scroll the page to the product section
				window.scrollTo({
					top: sectionPosition - sectionOffset,
					behavior: 'smooth',
				});
			}
		}
	};

	return { categorizeMenuByCategory, scrollToCategory };
};

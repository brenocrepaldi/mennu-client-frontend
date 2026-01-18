export const useMenuUtils = () => {
	const scrollToCategory = (category: string) => {
		// Find the category button and container for horizontal scroll
		const categoryButton = document.getElementById(`${category}-button`);
		const categoryContainer = document.querySelector('.category-list-container');

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

	return { scrollToCategory };
};

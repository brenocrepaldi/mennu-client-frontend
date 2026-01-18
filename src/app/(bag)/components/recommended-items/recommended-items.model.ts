import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IProduct, IRestaurant } from '../../../../types/restaurant';
import { IBagItem } from '../../../../types/bag';

export const useRecommendedItemsModel = ({
	bag,
	restaurant,
	addItemToBag,
}: {
	bag: IBagItem[];
	restaurant: IRestaurant;
	addItemToBag: (item: IBagItem) => void;
}) => {
	const navigate = useNavigate();

	// Create a set of IDs of items already in the bag to avoid duplicates
	const bagItemIds = new Set(bag.map((item) => item.id));

	// Filter the restaurant's menu to exclude items already in the bag
	const recommendedItems = restaurant.menu.filter(
		(product) => !bagItemIds.has(product.id) // Exclude items already in the bag
	);

	// If there are no recommended items, display the full menu
	const hasRecommendedItems = recommendedItems.length > 0 ? recommendedItems : restaurant.menu;

	// Function to handle adding an item to the bag
	function handleAddItemToBag(
		event: React.MouseEvent<HTMLDivElement>,
		product: IProduct
	) {
		// Prevent the click event from bubbling up to the parent element
		event.stopPropagation();

		// Create a new BagItem object and add it to the bag
		const item: IBagItem = {
			...product,
			uuid: uuidv4(), // Generate a unique ID for the item
			quantity: 1, // Start with 1 quantity when adding to the bag
		};
		addItemToBag(item); // Add the item to the bag
	}

	return {
		navigate,
		hasRecommendedItems,
		handleAddItemToBag,
	};
};

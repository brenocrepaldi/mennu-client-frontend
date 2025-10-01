import { create } from 'zustand';
import { IBagItem, IBagState } from '../types/bag';
import { UUIDTypes } from 'uuid';

// Creates the store for managing the shopping bag's state
export const useBagStore = create<IBagState>((set, get) => {
	// Initial empty bag
	const initialBag: IBagItem[] = [];

	// Helper function to calculate the total price of items in the bag
	const calculateTotalPrice = (bag: IBagItem[]) =>
		bag.reduce((acc, item) => acc + item.price * item.quantity, 0);

	// Helper function to calculate the total number of items in the bag
	const calculateTotalItemsCount = (bag: IBagItem[]) =>
		bag.reduce((total, item) => total + item.quantity, 0);

	return {
		// Initial state of the bag
		bag: initialBag,
		// Initial total price and item count based on the empty bag
		totalPrice: calculateTotalPrice(initialBag),
		totalItemsCount: calculateTotalItemsCount(initialBag),

		// Retrieves the total number of items in the bag
		getTotalItemsCount: () => {
			// Access the current state and calculate the total item count
			return get().bag.reduce((total, item) => total + item.quantity, 0);
		},

		// Adds a new item to the bag or updates the quantity of an existing item
		addItemToBag: (newItem: IBagItem) => {
			set((state) => {
				// Verifica se um item com o mesmo ID e observação já está na sacola
				const existingItem = state.bag.find(
					(i) => i.id === newItem.id && i.observation === newItem.observation
				);

				let updatedBag;

				if (existingItem) {
					// Se o item já existe (mesmo ID e observação), apenas incrementa a quantidade
					updatedBag = state.bag.map((i) =>
						i.id === newItem.id && i.observation === newItem.observation
							? { ...i, quantity: i.quantity + 1 }
							: i
					);
				} else {
					// Se for um item novo (diferente observação ou novo produto), cria um UUID e adiciona
					updatedBag = [...state.bag, { ...newItem }];
				}

				return {
					bag: updatedBag,
					totalPrice: calculateTotalPrice(updatedBag),
					totalItemsCount: calculateTotalItemsCount(updatedBag),
				};
			});
		},

		// Removes one unit of an item from the bag, or removes it entirely if the quantity is 0
		removeItemFromBag: (uuid: UUIDTypes) => {
			set((state) => {
				// Update the bag by decreasing the quantity of the specified item
				const updatedBag = state.bag
					.map((item) => (item.uuid === uuid ? { ...item, quantity: item.quantity - 1 } : item))
					// Filter out items with zero quantity
					.filter((item) => item.quantity > 0);

				// Return the updated state
				return {
					bag: updatedBag,
					totalPrice: calculateTotalPrice(updatedBag),
					totalItemsCount: calculateTotalItemsCount(updatedBag),
				};
			});
		},

		// Completely removes an item from the bag based on its ID and optional observation
		deleteItemFromBag: (uuid: UUIDTypes) => {
			set((state) => {
				// Filter out the specified item from the bag entirely
				const updatedBag = state.bag.filter((item) => !(item.uuid === uuid));

				// Return the updated state
				return {
					bag: updatedBag,
					totalPrice: calculateTotalPrice(updatedBag),
					totalItemsCount: calculateTotalItemsCount(updatedBag),
				};
			});
		},

		// Updates one item in the bag
		updateItemInBag: (updatedItem: IBagItem) => {
			set((state) => {
				const updatedBag = state.bag.map(
					(item) => (item.uuid === updatedItem.uuid ? updatedItem : item) // Update the item if it matches the UUID
				);

				return {
					bag: updatedBag,
					totalPrice: calculateTotalPrice(updatedBag),
					totalItemsCount: calculateTotalItemsCount(updatedBag),
				};
			});
		},

		// Clears all items from the bag
		clearBag: () => {
			set({
				bag: [],
				totalPrice: 0,
				totalItemsCount: 0,
			});
		},
	};
});

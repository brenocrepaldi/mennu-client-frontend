import { UUIDTypes } from 'uuid';
import { IProduct } from './restaurant';

// Bag-related data structures

// Represents an item in the shopping bag, extending from Product with a quantity and optional observation
export interface IBagItem extends IProduct {
	uuid: string; // Unique identifier for the item in the bag
	quantity: number; // Quantity of the product in the bag
	observation?: string; // Optional observation (e.g., special requests or notes for the item)
}

// Represents the state of the shopping bag
export interface IBagState {
	bag: IBagItem[]; // List of items in the bag
	totalPrice: number; // Total price of all items in the bag
	totalItemsCount: number; // Total count of items in the bag

	// Function to get the total number of items in the bag
	getTotalItemsCount: () => number;

	// Function to add an item to the bag
	addItemToBag: (item: IBagItem) => void;

	// Function to remove an item from the bag (decrease quantity)
	removeItemFromBag: (uuid: UUIDTypes) => void;

	// Function to delete an item from the bag entirely
	deleteItemFromBag: (uuid: UUIDTypes) => void;

	// Function to update an item in the bag
	updateItemInBag: (updatedItem: IBagItem) => void;

	// Function to clear all items from the bag
	clearBag: () => void;
}

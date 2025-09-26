import { UUIDTypes } from 'uuid';

// Restaurant-related data structures

// Represents the address of the restaurant
export interface IAddress {
	street: string; // Street name
	number: number; // Street number
	neighborhood: string; // Neighborhood name
	city: string; // City name
	state: string; // State name
	zipCode: string; // ZIP code
}

// Contact information for the restaurant
export interface IContact {
	phone: string; // Phone number
	email: string; // Email address
	whatsapp: string; // WhatsApp contact
}

// Represents the operating hours for each day of the week
export interface IOperatingHours {
	day: string; // Day of the week (e.g., "Monday")
	open: string | null; // Opening time or null if closed
	close: string | null; // Closing time or null if closed
}

// Represents a product on the restaurant's menu
export interface IProduct {
	id: number; // Unique identifier for the product
	name: string; // Name of the product
	description: string; // Description of the product
	price: number; // Price of the product
	image: string; // URL to the product image
	category: string; // Category of the product (e.g., "Appetizer", "Main Course")
}

// Represents the delivery details of the restaurant
export interface IDelivery {
	available: boolean; // Whether delivery is available or not
	minimumOrder: number; // Minimum order amount for delivery
	fee: number; // Delivery fee
	estimatedTime: string; // Estimated delivery time (e.g., "30 minutes")
}

// Defines the payment methods supported by the restaurant
export interface IPaymentMethods {
	delivery: string[]; // List of payment methods available for delivery (e.g., "Cash", "Card")
	online: string[]; // List of payment methods available for online orders (e.g., "Credit Card", "PayPal")
}

// Represents a restaurant with all its details
export interface IRestaurant {
	id: number; // Unique identifier for the restaurant
	name: string; // Name of the restaurant
	description: string; // Short description of the restaurant
	address: IAddress; // Address details
	contact: IContact; // Contact details
	operatingHours: IOperatingHours[]; // Array of operating hours for each day
	logo: string; // URL to the restaurant's logo image
	banner: string; // URL to the restaurant's banner image
	menu: IProduct[]; // List of products (menu items) available at the restaurant
	delivery: IDelivery; // Delivery information
	paymentMethods: IPaymentMethods; // Payment methods for both delivery and online orders
	rating: number; // Rating of the restaurant (out of 5)
	reviews: number; // Number of reviews the restaurant has received
	socialMedia: {
		instagram: string; // Instagram profile link
		facebook: string; // Facebook profile link
	};
}

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

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

export interface IPaymentMethodOption {
	id: PaymentMethodType;
	label: string;
	icon: React.ComponentType<{ className?: string; size?: number }>;
}

export type PaymentMethodType = 'credit-card' | 'debit-card' | 'cash' | 'pix';

// Defines the payment methods supported by the restaurant
export interface IPaymentMethods {
	delivery: PaymentMethodType[];
	online?: PaymentMethodType[];
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

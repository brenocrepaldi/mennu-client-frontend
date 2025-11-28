import { IOperatingHours, IPaymentMethodOption, IProduct } from '../types/restaurant';
import { CreditCard, Wallet, Banknote } from 'lucide-react';

/**
 * Determines if a restaurant is currently open based on its operating hours.
 * @param operatingHours - The restaurant's schedule for each day of the week.
 * @returns {boolean} - True if the restaurant is open, false otherwise.
 */
export const isRestaurantOpen = (operatingHours: IOperatingHours[]): boolean => {
	const now = new Date();

	// Get the current day of the week in the same format as the JSON
	const dayOfWeek = now.toLocaleString('pt-BR', { weekday: 'long' }).toLowerCase();

	// Find the schedule for the current day
	const todaySchedule = operatingHours.find((day) => day.day === dayOfWeek);

	// If there is no schedule for today or it's closed, return false
	if (!todaySchedule || todaySchedule.open === null || todaySchedule.close === null) {
		return false;
	}

	// Convert current time to minutes since midnight
	const currentTime = now.getHours() * 60 + now.getMinutes();

	// Helper function to convert time string (hh:mm) into minutes
	const timeToMinutes = (time: string) => {
		const [hour, minute] = time.split(':').map(Number);
		return hour * 60 + (minute || 0);
	};

	// Convert opening and closing times
	const openTime = timeToMinutes(todaySchedule.open);
	let closeTime = timeToMinutes(todaySchedule.close);

	// If closing time is "00:00", treat it as the end of the day
	if (todaySchedule.close === '00:00') {
		closeTime = 24 * 60; // 1440 minutes (midnight)
	}

	// Check if the restaurant is currently open
	return currentTime >= openTime && currentTime < closeTime;
};

/**
 * Categorizes menu items by their category.
 * @param menu - Array of products to be categorized.
 * @returns {Record<string, IProduct[]>} - Object with categories as keys and arrays of products as values.
 */
export function categorizeItems(menu: IProduct[]) {
	return menu.reduce((acc, item) => {
		// Initialize category if it doesn't exist
		if (!acc[item.category]) {
			acc[item.category] = [];
		}

		// Add product to the corresponding category
		acc[item.category].push(item);
		return acc;
	}, {} as Record<string, IProduct[]>);
}

/**
 * Retrieves all unique categories from the menu.
 * @param menu - Array of products.
 * @returns {string[]} - Array of unique category names.
 */
export function getAllCategories(menu: IProduct[]): string[] {
	const categories = new Set<string>();
	menu.forEach((item) => categories.add(item.category));
	return Array.from(categories);
}

/**
 * List of payment method options with their labels and icons.
 */
export const paymentMethodOptions: IPaymentMethodOption[] = [
	{ id: 'credit-card', label: 'Crédito', icon: CreditCard },
	{ id: 'debit-card', label: 'Débito', icon: CreditCard },
	{ id: 'pix', label: 'PIX', icon: Wallet },
	{ id: 'cash', label: 'Dinheiro', icon: Banknote },
];

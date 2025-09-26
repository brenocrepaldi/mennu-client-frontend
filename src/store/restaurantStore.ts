import { create } from 'zustand';
import { restaurant as mockRestaurant } from '../mocks/restaurant';
import { IRestaurant } from '../types';
import { isRestaurantOpen } from '../utils/restaurantUtils';

// Define the Zustand store interface
export interface IRestaurantStore {
	restaurant: IRestaurant;
	isOpen: boolean;
	updateRestaurant: (restaurant: IRestaurant) => void;
}

export const useRestaurantStore = create<IRestaurantStore>((set) => ({
	// Initial state with mock restaurant data
	restaurant: mockRestaurant,

	// Derived state: determines if the restaurant is currently open
	isOpen: isRestaurantOpen(mockRestaurant.operatingHours),

	// Updates the restaurant state and recalculates its open status
	updateRestaurant: (newRestaurant) =>
		set(() => ({
			restaurant: newRestaurant,
			isOpen: isRestaurantOpen(newRestaurant.operatingHours),
		})),
}));

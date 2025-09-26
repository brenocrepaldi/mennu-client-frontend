import { useNavigate, useParams } from 'react-router-dom';
import { IRestaurantStore, useRestaurantStore } from '../../store/restaurantStore';
import { useEffect } from 'react';

export const useCategoryModel = () => {
	// Hooks for navigation and store access
	const { id } = useParams();
	const navigate = useNavigate();
	const { restaurant }: IRestaurantStore = useRestaurantStore();

	const productsOfSelectedCategory = restaurant.menu.filter((item) => item.category === id);

	const selectedCategory = restaurant.menu.find((item) => item.category === id)?.category;

	// Effect to scroll to the top when the page loads
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return {
		navigate,
		selectedCategory,
		productsOfSelectedCategory,
	};
};

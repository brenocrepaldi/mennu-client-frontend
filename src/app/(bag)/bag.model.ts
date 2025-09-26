import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBagStore } from '../../store/bagStore';
import { useRestaurantStore } from '../../store/restaurantStore';

export const useBagModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const {
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
	} = useBagStore();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return {
		navigate,
		restaurant,
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
	};
};

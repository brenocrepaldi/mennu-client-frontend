import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IRestaurantStore, useRestaurantStore } from '../../store/restaurantStore';

export const useRestaurantDetailsModel = () => {
	const navigate: NavigateFunction = useNavigate();
	const { restaurant }: IRestaurantStore = useRestaurantStore();

	const today: string = new Date().toLocaleString('pt-BR', { weekday: 'long' }).toLowerCase();

	return {
		navigate,
		restaurant,
		today,
	};
};

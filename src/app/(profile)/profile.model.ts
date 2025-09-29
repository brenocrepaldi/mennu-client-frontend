import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useProfileUtils } from './profile.utils';

export const useProfileModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const { GoogleSvg } = useProfileUtils();

	return { navigate, restaurant, GoogleSvg };
};

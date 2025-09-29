import { useRestaurantStore } from '../../store/restaurantStore';
import { useProfileUtils } from './profile.utils';

export const useProfileModel = () => {
	const { restaurant } = useRestaurantStore();
	const { GoogleSvg } = useProfileUtils();
  
	return { restaurant, GoogleSvg };
};

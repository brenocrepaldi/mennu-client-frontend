import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useProfileUtils } from '../(profile)/profile.utils';

export const useHomeModel = () => {
	const navigate = useNavigate();
	const { restaurant, isOpen } = useRestaurantStore();
	const { GoogleSvg } = useProfileUtils();

	const handleEmailLogin = () => {
		void navigate('/login');
	};

	const handleGoogleLogin = () => {
		// TODO: Implementar login com Google
		console.log('Google login clicked');
	};

	const handleGoToMenu = () => {
		void navigate('/menu');
	};

	const handleViewRestaurantDetails = () => {
		void navigate(`/restaurant/${String(restaurant.id)}`);
	};

	return {
		navigate,
		restaurant,
		isOpen,
		GoogleSvg,
		handleEmailLogin,
		handleGoogleLogin,
		handleGoToMenu,
		handleViewRestaurantDetails,
	};
};

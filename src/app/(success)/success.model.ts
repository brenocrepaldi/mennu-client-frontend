import { useNavigate, useLocation } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';

export const useSuccessModel = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { restaurant } = useRestaurantStore();

	const isFromLogin = location.pathname.includes('/login/success');
	const isFromRegister = location.pathname.includes('/register/success');

	return {
		navigate,
		location,
		restaurant,
		isFromLogin,
		isFromRegister,
	};
};

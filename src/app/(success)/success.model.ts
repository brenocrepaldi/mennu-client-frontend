import { useNavigate, useLocation } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useUserStore } from '../../store/userStore';

export const useSuccessModel = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { restaurant } = useRestaurantStore();
	const { isAuthenticated } = useUserStore();

	const isFromLogin = location.pathname.includes('/login/success');
	const isFromRegister = location.pathname.includes('/register/success');
	const isFromOrder = location.pathname.includes('/order/success');

	return {
		navigate,
		location,
		restaurant,
		isFromLogin,
		isFromRegister,
		isFromOrder,
		isAuthenticated,
	};
};

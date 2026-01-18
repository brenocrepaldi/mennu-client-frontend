import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useProfileUtils } from './profile.utils';
import { useMockUser } from '../../hooks/useMockUser';
import { toast } from 'sonner';
import { useUserUtils } from '../../utils/userUtils';

export const useProfileModel = () => {
	const navigate = useNavigate();
	const { user, isAuthenticated, clearUser } = useMockUser(); // Carrega automaticamente o mock user
	const { restaurant, isOpen } = useRestaurantStore();
	const { GoogleSvg } = useProfileUtils();
	const { getUserNameInitials } = useUserUtils();

	const handleLogout = () => {
		toast.error('Saindo...');
		setTimeout(() => {
			clearUser();
			void navigate('/login');
		}, 1000);
	};

	return {
		navigate,
		user,
		isAuthenticated,
		restaurant,
		isOpen,
		GoogleSvg,
		handleLogout,
		getUserNameInitials,
	};
};

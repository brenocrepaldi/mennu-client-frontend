import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useProfileUtils } from './profile.utils';
import { useMockUser } from '../../hooks/useMockUser';
import { toast } from 'sonner';

export const useProfileModel = () => {
	const navigate = useNavigate();
	const { user, isAuthenticated, clearUser } = useMockUser(); // Carrega automaticamente o mock user
	const { restaurant, isOpen } = useRestaurantStore();
	const { GoogleSvg } = useProfileUtils();
	const handleLogout = () => {
		toast.error('Saindo...');
		setTimeout(() => {
			clearUser();
			navigate('/login');
		}, 1000);
	};

	const handleMyProfile = () => {
		toast.info('Funcionalidade em desenvolvimento');
		console.log('Navegar para editar perfil');
		// Example of how navigation would be:
		// navigate('/profile/edit');
	};

	const handleMyAddresses = () => {
		toast.info('Funcionalidade em desenvolvimento');
		console.log('Navegar para meus endereços');
		// Example of how navigation would be:
		// navigate('/profile/addresses');
	};

	return {
		navigate,
		user,
		isAuthenticated,
		restaurant,
		isOpen,
		GoogleSvg,
		handleLogout,
		handleMyProfile,
		handleMyAddresses,
	};
};

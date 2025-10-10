import { useNavigate } from 'react-router-dom';
import { useMockUser } from '../../hooks/useMockUser';

export const useProfileAddressesModel = () => {
	const navigate = useNavigate();
	const user = useMockUser();
	return { navigate, user };
};

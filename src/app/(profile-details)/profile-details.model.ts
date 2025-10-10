import { useNavigate } from 'react-router-dom';
import { useMockUser } from '../../hooks/useMockUser';
import { useUserUtils } from '../../utils/userUtils';

export const useProfileDetailsModel = () => {
	const navigate = useNavigate();
	const { user } = useMockUser();
	const { getUserNameInitials } = useUserUtils();

	return {
		navigate,
		user,
		getUserNameInitials,
	};
};

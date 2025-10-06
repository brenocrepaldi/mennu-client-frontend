import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export function useMockUser() {
	const { user, isAuthenticated, loadMockUser, clearUser, saveMockUser } = useUserStore();

	useEffect(() => {
		if (!user && !isAuthenticated) loadMockUser();
	}, [user, isAuthenticated, loadMockUser]);

	return {
		user,
		isAuthenticated,
		loadMockUser,
		clearUser,
		saveMockUser,
	};
}

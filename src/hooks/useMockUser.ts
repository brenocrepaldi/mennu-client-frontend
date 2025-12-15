// import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export function useMockUser() {
	const { user, isAuthenticated, loadUser, clearUser, saveUser } = useUserStore();

	// useEffect(() => {
	// 	if (!user && !isAuthenticated) loadUser();
	// }, [user, isAuthenticated, loadUser]);

	return {
		user,
		isAuthenticated,
		loadUser,
		clearUser,
		saveUser,
	};
}

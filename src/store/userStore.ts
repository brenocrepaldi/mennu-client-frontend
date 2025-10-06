import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../types/user';
import { user as mockUser } from '../mocks/user';

// Define the Zustand store interface
export interface IUserStore {
	user: IUser | null;
	isAuthenticated: boolean;
	saveMockUser: (mockUserData: IUser) => void;
	loadMockUser: () => void;
	clearUser: () => void;
}

export const useUserStore = create<IUserStore>()(
	persist(
		(set) => ({
			user: null, // Initial state with no user
			isAuthenticated: false,

			saveMockUser: (mockUserData) => {
				// Function to save user data to the store
				set({ user: mockUserData, isAuthenticated: true });
			},

			loadMockUser: () => {
				// Load mock user automatically
				set({ user: mockUser, isAuthenticated: true });
			},

			clearUser: () => {
				// Clear user data
				set({ user: null, isAuthenticated: false });
			},
		}),
		{
			name: 'user-storage', // Unique key name used for localStorage

			// Define the storage mechanism; in this case, using localStorage.
			// sessionStorage or a custom storage provider could be used instead.
			storage: createJSONStorage(() => localStorage),

			partialize: (state) => ({
				user: state.user, // Persist user data
				isAuthenticated: state.isAuthenticated, // Persist authentication state
			}),
		}
	)
);

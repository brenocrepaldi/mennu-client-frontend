import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IUserAddress } from '../types/user';
import { mockAddresses as initialMockAddresses } from '../mocks/user';

interface AddressesState {
	addresses: IUserAddress[];
	addAddress: (address: Omit<IUserAddress, 'id' | 'icon'>) => void;
	updateAddress: (id: number, address: Omit<IUserAddress, 'id' | 'icon'>) => void;
	deleteAddress: (id: number) => void;
	getAddressById: (id: number) => IUserAddress | undefined;
}

export const useAddressesStore = create<AddressesState>()(
	persist(
		(set, get) => ({
			addresses: initialMockAddresses,

			addAddress: (address) => {
				const newAddress: IUserAddress = {
					...address,
					id: Date.now(), // Generate unique ID
					icon: address.type === 'Casa' ? '🏠' : address.type === 'Trabalho' ? '💼' : '📍',
				};
				set((state) => ({
					addresses: [...state.addresses, newAddress],
				}));
			},

			updateAddress: (id, address) => {
				set((state) => ({
					addresses: state.addresses.map((addr) =>
						addr.id === id
							? {
									...address,
									id,
									icon: address.type === 'Casa' ? '🏠' : address.type === 'Trabalho' ? '💼' : '📍',
							  }
							: addr
					),
				}));
			},

			deleteAddress: (id) => {
				set((state) => ({
					addresses: state.addresses.filter((addr) => addr.id !== id),
				}));
			},

			getAddressById: (id) => {
				return get().addresses.find((addr) => addr.id === id);
			},
		}),
		{
			name: 'addresses-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

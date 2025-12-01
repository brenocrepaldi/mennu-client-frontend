import { IUserAddress } from '@/types/user';
import { useState } from 'react';

export const useProfileAddressesModel = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [addressToEdit, setAddressToEdit] = useState<IUserAddress | undefined>(undefined);

	const handleAddAddress = () => {
		setAddressToEdit(undefined);
		setIsModalOpen(true);
	};

	const handleEditAddress = (address: IUserAddress) => {
		setAddressToEdit(address);
		setIsModalOpen(true);
	};

	const handleSaveAddress = (address: Omit<IUserAddress, 'id' | 'icon'>) => {
		// TODO: Implementar lógica de salvar/editar endereço
		console.log('Salvando endereço:', address);
		setIsModalOpen(false);
		setAddressToEdit(undefined);
	};
	return {
		isModalOpen,
		setIsModalOpen,
		addressToEdit,
		setAddressToEdit,
		handleAddAddress,
		handleEditAddress,
		handleSaveAddress,
	};
};

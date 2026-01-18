import { Plus, Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../../components/page-template';
import { AddressFormModal } from '../../components/address-form-modal';
import { ConfirmModal } from '../../components/confirm-modal';
import { useProfileAddressesModel } from './profile-addresses.model';
import { useAddressesStore } from '@/store/addressesStore';
import { toast } from 'sonner';
import type { IUserAddress } from '@/types/user';

type ProfileAddressesViewProps = ReturnType<typeof useProfileAddressesModel>;

export function ProfileAddressesView(props: ProfileAddressesViewProps) {
	const {
		isModalOpen,
		setIsModalOpen,
		addressToEdit,
		setAddressToEdit,
		handleAddAddress,
		handleEditAddress,
	} = props;
	const { addresses, deleteAddress } = useAddressesStore();
	const [addressToDelete, setAddressToDelete] = useState<IUserAddress | null>(null);

	const handleDelete = () => {
		if (addressToDelete) {
			deleteAddress(addressToDelete.id);
			toast.success('Endereço excluído.');
			setAddressToDelete(null);
		}
	};

	return (
		<Page bgSecondary pageHeaderLabel={'Meus Endereços'} pageHeaderReturnToPath={'/profile'}>
			<div className="flex-1 flex flex-col justify-between gap-12 px-4 py-6">
				<div className="space-y-6">
					{/* Addresses List */}
					<div className="space-y-3">
						{addresses.length === 0 && (
							<p className="text-sm text-basic-500">Você ainda não possui endereços cadastrados.</p>
						)}
						{addresses.map((address) => (
							<div
								key={address.id}
								className="bg-white rounded-xl shadow-sm border border-basic-100 p-5 hover:shadow-md transition-all"
							>
								<div className="flex items-start justify-between gap-4">
									<div className="flex items-start gap-3 flex-1">
										<div className="p-2 bg-basic-100 rounded-lg text-basic-600">{address.icon}</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2">
												<h3 className="font-semibold text-basic-800">{address.type}</h3>
											</div>
											<p className="text-basic-600 text-sm mt-1">{address.address}</p>
											<p className="text-basic-500 text-sm">
												{address.neighborhood}, {address.city}
											</p>
											<p className="text-basic-400 text-xs mt-1">{address.zipCode}</p>
										</div>
									</div>
									<div className="flex gap-2">
										<button
											onClick={() => {
												handleEditAddress(address);
											}}
											className="p-2 rounded-lg bg-basic-800/10 text-basic-800 hover:bg-basic-800/20 transition-colors"
											title="Editar endereço"
										>
											<Pencil className="w-4 h-4" />
										</button>
										<button
											onClick={() => {
												setAddressToDelete(address);
											}}
											className="p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
											title="Excluir endereço"
										>
											<Trash2 className="w-4 h-4" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Add New Address */}
					<button
						onClick={handleAddAddress}
						className="w-full bg-app text-white p-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
					>
						<Plus className="w-5 h-5" />
						Adicionar novo endereço
					</button>
				</div>

				{/* Address Form Modal */}
				<AddressFormModal
					key={addressToEdit?.id ?? 'new-address'}
					isOpen={isModalOpen}
					onClose={() => {
						setIsModalOpen(false);
						setAddressToEdit(undefined);
					}}
					addressToEdit={addressToEdit}
				/>

				{/* Confirm Delete Modal */}
				<ConfirmModal
					isOpen={!!addressToDelete}
					onClose={() => {
						setAddressToDelete(null);
					}}
					onConfirm={handleDelete}
					title="Excluir endereço"
					message={`Tem certeza que deseja excluir o endereço?`}
					confirmText="Excluir"
					cancelText="Cancelar"
					isDangerous
				/>
			</div>
		</Page>
	);
}

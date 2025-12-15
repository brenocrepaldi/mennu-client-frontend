import { Plus } from 'lucide-react';
import { mockAddresses } from '../../mocks/user';
import { Page } from '../../components/page-template';
import { AddressFormModal } from './components/address-form-modal';
import { useProfileAddressesModel } from './profile-addresses.model';

type ProfileAddressesViewProps = ReturnType<typeof useProfileAddressesModel>;

export function ProfileAddressesView(props: ProfileAddressesViewProps) {
	const {
		isModalOpen,
		setIsModalOpen,
		addressToEdit,
		setAddressToEdit,
		handleAddAddress,
		handleEditAddress,
		handleSaveAddress,
	} = props;

	return (
		<Page bgSecondary pageHeaderLabel={'Meus Endereços'} pageHeaderReturnToPath={'/profile'}>
			<div className="flex-1 flex flex-col justify-between gap-12 px-4 py-6">
				<div className="space-y-6">
					{/* Addresses List */}
					<div className="space-y-3">
						{mockAddresses.map((address) => (
							<div
								key={address.id}
								className="bg-white rounded-lg shadow-sm border border-basic-100 p-4 hover:shadow-md transition-shadow"
							>
								<div className="flex items-start justify-between">
									<div className="flex items-start gap-3">
										<div className="p-2 bg-basic-100 rounded-lg text-basic-600">{address.icon}</div>
										<div className="flex-1">
											<div className="flex items-center gap-2">
												<h3 className="font-semibold text-basic-800">{address.type}</h3>
											</div>
											<p className="text-basic-600 text-sm mt-1">{address.address}</p>
											<p className="text-basic-500 text-sm">
												{address.neighborhood}, {address.city}
											</p>
											<p className="text-basic-400 text-xs">{address.zipCode}</p>
										</div>
									</div>
									<button
										onClick={() => {
											handleEditAddress(address);
										}}
										className="text-app text-sm font-medium hover:opacity-70"
									>
										Editar
									</button>
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
					onSave={handleSaveAddress}
					addressToEdit={addressToEdit}
				/>
			</div>
		</Page>
	);
}

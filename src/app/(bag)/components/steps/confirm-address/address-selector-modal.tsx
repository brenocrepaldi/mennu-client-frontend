import { IUserAddress } from '@/types/user';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

interface AddressSelectorModalProps {
	mockAddresses: IUserAddress[];
	selectedAddressId: number;
	handleSelectAddress: (addressId: number) => void;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddressSelectorModal({
	mockAddresses,
	selectedAddressId,
	handleSelectAddress,
	setIsModalOpen,
}: AddressSelectorModalProps) {
	const [tempSelectedId, setTempSelectedId] = useState(selectedAddressId);

	const handleConfirm = () => {
		setIsModalOpen(false);
		handleSelectAddress(tempSelectedId);
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center"
			onClick={() => {
				setIsModalOpen(false);
			}}
		>
			<div
				className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[85vh] flex flex-col animate-slide-up"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-5 border-b border-basic-200">
					<h3 className="text-lg font-bold text-basic-800">Selecione o endereço</h3>
					<button
						onClick={() => setIsModalOpen(false)}
						className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-basic-100 transition-colors"
					>
						<X size={20} className="text-basic-600" />
					</button>
				</div>

				{/* Address List */}
				<div className="flex-1 overflow-y-auto p-5 space-y-3">
					{mockAddresses.map((address) => {
						const isSelected = address.id === tempSelectedId;

						return (
							<button
								key={address.id}
								onClick={() => setTempSelectedId(address.id)}
								className={`
											w-full text-left p-4 rounded-xl border-2 transition-all
											${isSelected ? 'border-app bg-app/5' : 'border-basic-200 hover:border-basic-300 hover:bg-basic-50'}
										`}
							>
								<div className="flex items-start gap-3">
									<div
										className={`
												w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
												${isSelected ? 'bg-app/10' : 'bg-basic-100'}
											`}
									>
										{address.icon}
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											<span className="font-bold text-basic-800">{address.type}</span>
											{isSelected && (
												<div className="w-5 h-5 rounded-full bg-app flex items-center justify-center">
													<Check size={14} className="text-white" strokeWidth={3} />
												</div>
											)}
										</div>
										<p className="text-sm text-basic-800 font-medium">
											{address.street}, {address.number}
										</p>
										{address.complement && (
											<p className="text-sm text-basic-600">{address.complement}</p>
										)}
										<p className="text-sm text-basic-600">
											{address.neighborhood} - {address.city}
										</p>
										<p className="text-xs text-basic-500 mt-1">CEP {address.zipCode}</p>
									</div>
								</div>
							</button>
						);
					})}
				</div>

				{/* Footer com botão confirmar */}
				<div className="p-5 border-t border-basic-200">
					<button
						onClick={handleConfirm}
						className="w-full bg-app text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
					>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
}

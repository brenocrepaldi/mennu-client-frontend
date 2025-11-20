import { MapPin, X, Check } from 'lucide-react';
import { IUserAddress } from '../../../../types/user';
import { useState } from 'react';

interface ConfirmAddressProps {
	mockAddresses: IUserAddress[];
	selectedAddressId: number;
	deliveryFee: number;
	onChangeAddress?: (addressId: number) => void;
}

export function ConfirmAddress({
	mockAddresses,
	selectedAddressId,
	deliveryFee,
	onChangeAddress,
}: ConfirmAddressProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const selectedAddress = mockAddresses.find((a) => a.id === selectedAddressId);

	const handleSelectAddress = (addressId: number) => {
		onChangeAddress?.(addressId);
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="pt-6 space-y-8">
				{/* Header */}
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-bold text-basic-800">Entregar no endereço</h2>
				</div>

				{/* Address Card */}
				<div className="bg-white rounded-lg border border-basic-200 p-4 space-y-3">
					{/* Address Info */}
					<div className="flex items-start gap-3">
						<MapPin className="w-5 h-5 text-basic-800 mt-0.5 flex-shrink-0" />
						<div className="flex-1">
							<p className="text-base font-semibold text-basic-800">
								{selectedAddress?.address}
							</p>
							<p className="text-sm text-basic-500 mt-0.5">
								{selectedAddress?.neighborhood} - {selectedAddress?.city}
							</p>
						</div>
						<button
							onClick={() => setIsModalOpen(true)}
							className="text-sm font-medium text-app hover:opacity-80 transition-opacity flex-shrink-0"
						>
							Trocar
						</button>
					</div>
				</div>

				{/* Delivery Options */}
				<div className="space-y-3">
					<div className="flex items-center gap-2">
						<h3 className="text-base font-bold text-basic-800">Opções de entrega</h3>
						<div className="w-5 h-5 rounded-full bg-basic-200 flex items-center justify-center">
							<span className="text-xs text-basic-600">?</span>
						</div>
					</div>

					{/* Standard Delivery Option */}
					<div className="bg-white rounded-lg border-2 border-basic-800 p-4">
						<div className="flex items-center justify-between">
							<div className="flex-1">
								<p className="text-base font-semibold text-basic-800">Padrão</p>
								<p className="text-sm font-semibold text-basic-500 mt-0.5">Hoje, 40 - 50min</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-lg font-semibold text-basic-800">
									R$ {deliveryFee.toFixed(2).replace('.', ',')}
								</span>
								<div className="w-5 h-5 rounded-full border-2 border-app flex items-center justify-center">
									<div className="w-3 h-3 rounded-full bg-app" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal de seleção de endereço */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center">
					<div className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[85vh] flex flex-col animate-slide-up">
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
								const isSelected = address.id === selectedAddressId;

								return (
									<button
										key={address.id}
										onClick={() => handleSelectAddress(address.id)}
										className={`
											w-full text-left p-4 rounded-xl border-2 transition-all
											${
												isSelected
													? 'border-app bg-app/5'
													: 'border-basic-200 hover:border-basic-300 hover:bg-basic-50'
											}
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
					</div>
				</div>
			)}
		</>
	);
}

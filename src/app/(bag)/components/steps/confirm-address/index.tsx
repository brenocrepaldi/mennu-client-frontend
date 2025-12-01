import { MapPin } from 'lucide-react';
import { IUserAddress } from '../../../../../types/user';
import { useState } from 'react';
import { AddressSelectorModal } from './address-selector-modal';

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
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);
	const selectedAddress = mockAddresses.find((a) => a.id === selectedAddressId);

	const handleSelectAddress = (addressId: number) => {
		onChangeAddress?.(addressId);
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
							<p className="text-base font-semibold text-basic-800">{selectedAddress?.address}</p>
							<p className="text-sm text-basic-500 mt-0.5">
								{selectedAddress?.neighborhood} - {selectedAddress?.city}
							</p>
						</div>
						<button
							onClick={() => { setIsModalOpen(true); }}
							className="text-sm font-semibold text-app hover:opacity-80 transition-opacity flex-shrink-0"
						>
							Trocar
						</button>
					</div>
				</div>

				{/* Delivery Options */}
				<div className="space-y-3">
					<div className="flex items-center gap-2">
						<h3 className="text-base font-bold text-basic-800">Opções de entrega</h3>
						<div className="relative">
							<button
								onClick={() => { setIsTooltipOpen(!isTooltipOpen); }}
								className="w-5 h-5 rounded-full bg-basic-200 flex items-center justify-center hover:bg-basic-300 transition-colors"
							>
								<span className="text-xs text-basic-600">?</span>
							</button>

							{/* Tooltip */}
							{isTooltipOpen && (
								<>
									{/* Backdrop */}
									<div className="fixed inset-0 z-40" onClick={() => { setIsTooltipOpen(false); }} />
									{/* Tooltip Content */}
									<div className="absolute left-0 top-7 z-50 w-64 bg-basic-800 text-white p-3 rounded-lg shadow-lg">
										<div className="absolute -top-1.5 left-2 w-3 h-3 bg-basic-800 rotate-45" />
										<p className="text-sm leading-relaxed">
											A entrega padrão é realizada pelo próprio restaurante. A taxa de entrega é
											definida pelo estabelecimento.
										</p>
									</div>
								</>
							)}
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

			{/* Address Selector Modal */}
			{isModalOpen && (
				<AddressSelectorModal
					mockAddresses={mockAddresses}
					selectedAddressId={selectedAddressId}
					handleSelectAddress={handleSelectAddress}
					setIsModalOpen={setIsModalOpen}
				/>
			)}
		</>
	);
}

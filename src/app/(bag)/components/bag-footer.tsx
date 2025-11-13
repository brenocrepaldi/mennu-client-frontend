import { ShoppingBag } from 'lucide-react';

interface BagFooterProps {
	totalItemsCount: number;
	totalPrice: number;
	deliveryFee: number;
	currentStep: 'chose-products' | 'confirm-address' | 'checkout';
	handleStepChange: () => void;
}

export function BagFooter({
	totalItemsCount,
	totalPrice,
	deliveryFee,
	currentStep,
	handleStepChange,
}: BagFooterProps) {
	const totalWithDelivery = totalPrice + deliveryFee;
	const buttonText = currentStep === 'chose-products' ? 'Continuar' : 'Ir para pagamento';
	return (
		<div className="bg-secondary fixed bottom-0 w-full h-14 px-4 shadow-basic">
			<div className="h-full flex items-center justify-between">
				<div className="flex h-full items-center gap-3">
					<div className="relative">
						<ShoppingBag className="size-6 text-basic-800" />
						<div className="absolute -bottom-1 -right-1.5 w-4 h-4 flex items-center justify-center bg-basic-800 rounded-full">
							<span className="text-basic-50 text-xs font-bold">
								{totalItemsCount}
							</span>
						</div>
					</div>
					<div className="flex flex-col">
						<span className="text-basic-500 text-xs font-[500]">
							Total com a entrega
						</span>
						<div className="flex gap-1">
							<span className="font-semibold text-basic-800">
								{`R$ ${totalWithDelivery.toFixed(2).replace('.', ',')}`}
							</span>
						</div>
					</div>
				</div>
				<button
					onClick={() => handleStepChange()}
					className="bg-app px-10 py-2 rounded-lg transition-opacity duration-200 active:opacity-50 cursor-pointer"
				>
					<span className="text-sm font-bold text-basic-50">{buttonText}</span>
				</button>
			</div>
		</div>
	);
}

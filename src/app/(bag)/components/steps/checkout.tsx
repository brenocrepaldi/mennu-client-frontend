import { Tag, Receipt, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { IBagItem } from '../../../../types/bag';
import { IUserAddress } from '../../../../types/user';
import { PaymentMethodType } from '@/types/restaurant';
import { paymentMethodOptions } from '@/utils/restaurantUtils';

interface CheckoutProps {
	bag: IBagItem[];
	selectedAddress: IUserAddress;
	totalPrice: number;
	deliveryFee: number;
	onConfirmOrder: (paymentMethod: string, changeFor?: number, discount?: number) => void;
}

export function Checkout({
	bag,
	selectedAddress,
	totalPrice,
	deliveryFee,
	onConfirmOrder,
}: CheckoutProps) {
	const [selectedPayment, setSelectedPayment] = useState<PaymentMethodType>('credit-card');
	const [couponCode, setCouponCode] = useState('');
	const [appliedCoupon, setAppliedCoupon] = useState(false);
	const [discount, setDiscount] = useState(0);
	const [changeFor, setChangeFor] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const subtotal = totalPrice;
	const total = subtotal + deliveryFee - discount;

	const handleConfirmOrder = async () => {
		setIsLoading(true);
		// Simular processamento do pedido
		await new Promise((resolve) => setTimeout(resolve, 2000));
		onConfirmOrder(
			selectedPayment,
			selectedPayment === 'cash' && changeFor ? parseFloat(changeFor) : undefined,
			discount
		);
	};

	const handleApplyCoupon = () => {
		// Simulação de aplicação de cupom
		if (couponCode.toUpperCase() === 'DESCONTO10') {
			setDiscount(totalPrice * 0.1);
			setAppliedCoupon(true);
		}
	};

	return (
		<div className="pt-6 space-y-6">
			{/* Header */}
			<div>
				<h2 className="text-lg font-bold text-basic-800">Finalizar pedido</h2>
				<p className="text-sm text-basic-500 mt-1">Revise os detalhes antes de confirmar</p>
			</div>

			{/* Delivery Address Summary */}
			<div className="bg-white rounded-lg border border-basic-200 p-4">
				<div className="flex items-center justify-between mb-2">
					<h3 className="text-sm font-bold text-basic-800">Endereço de entrega</h3>
					<span className="text-xs text-app font-medium">Alterar</span>
				</div>
				<p className="text-sm text-basic-700">{selectedAddress.address}</p>
				<p className="text-xs text-basic-500 mt-0.5">
					{selectedAddress.neighborhood} - {selectedAddress.city}
				</p>
			</div>

			{/* Order Items Summary */}
			<div className="bg-white rounded-lg border border-basic-200 p-4">
				<div className="flex items-center justify-between mb-3">
					<h3 className="text-sm font-bold text-basic-800">Itens do pedido</h3>
					<span className="text-xs text-basic-500">
						{bag.length} {bag.length === 1 ? 'item' : 'itens'}
					</span>
				</div>
				<div className="space-y-2 max-h-40 overflow-y-auto scrollbar-hidden">
					{bag.map((item) => (
						<div key={item.uuid} className="flex items-start justify-between gap-2">
							<div className="flex-1">
								<p className="text-sm text-basic-700">
									<span className="font-semibold">{item.quantity}x</span> {item.name}
								</p>
								{item.observation && (
									<p className="text-xs text-basic-500 mt-0.5">Obs: {item.observation}</p>
								)}
							</div>
							<span className="text-sm font-semibold text-basic-700">
								R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Payment Methods */}
			<div className="bg-white rounded-lg border border-basic-200 p-4">
				<div className="flex items-center gap-2 mb-2">
					<Receipt className="w-4 h-4 text-basic-600" />
					<h3 className="text-sm font-bold text-basic-800">Forma de pagamento</h3>
				</div>

				{/* Payment Notice */}
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
					<p className="text-xs text-blue-700 leading-relaxed">
						<span className="font-semibold">Pagamento na entrega:</span> O pagamento será realizado
						directamente ao entregador. Este aplicativo não processa pagamentos online.
					</p>
				</div>

				<div className="space-y-2">
					{paymentMethodOptions.map((method) => {
						const Icon = method.icon;
						const isSelected = selectedPayment === method.id;
						return (
							<button
								key={method.id}
								onClick={() => setSelectedPayment(method.id)}
								className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
									isSelected ? 'border-app bg-app/5' : 'border-basic-200 hover:border-basic-300'
								}`}
							>
								<div className="flex items-center gap-3">
									<Icon className={`w-5 h-5 ${isSelected ? 'text-app' : 'text-basic-600'}`} />
									<span
										className={`text-sm font-medium ${
											isSelected ? 'text-basic-800' : 'text-basic-600'
										}`}
									>
										{method.label}
									</span>
								</div>
								<div
									className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
										isSelected ? 'border-app' : 'border-basic-300'
									}`}
								>
									{isSelected && <div className="w-3 h-3 rounded-full bg-app" />}
								</div>
							</button>
						);
					})}
				</div>

				{/* Change for cash */}
				{selectedPayment === 'cash' && (
					<div className="mt-3 pt-3 border-t border-basic-200">
						<label className="block text-sm font-medium text-basic-700 mb-2">
							Troco para quanto?
						</label>
						<input
							type="text"
							value={changeFor}
							onChange={(e) => {
								const value = e.target.value.replace(/\D/g, '');
								setChangeFor(value);
							}}
							placeholder="R$ 0,00"
							className="w-full px-3 py-2 text-sm border border-basic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
						/>
						{changeFor && parseFloat(changeFor) / 100 < total && (
							<p className="text-xs text-red-600 mt-1">
								O valor deve ser maior ou igual ao total do pedido
							</p>
						)}
					</div>
				)}
			</div>

			{/* Coupon Section */}
			<div className="bg-white rounded-lg border border-basic-200 p-4">
				<div className="flex items-center gap-2 mb-3">
					<Tag className="w-4 h-4 text-basic-600" />
					<h3 className="text-sm font-bold text-basic-800">Cupom de desconto</h3>
				</div>
				{!appliedCoupon ? (
					<div className="flex gap-2">
						<input
							type="text"
							value={couponCode}
							onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
							placeholder="Digite o código"
							className="flex-1 px-3 py-2 text-sm border border-basic-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
						/>
						<button
							onClick={handleApplyCoupon}
							disabled={!couponCode}
							className="px-4 py-2 bg-app text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Aplicar
						</button>
					</div>
				) : (
					<div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-3">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
								<Tag className="w-4 h-4 text-emerald-700" />
							</div>
							<div>
								<p className="text-sm font-semibold text-emerald-700">{couponCode}</p>
								<p className="text-xs text-emerald-600">Desconto aplicado</p>
							</div>
						</div>
						<button
							onClick={() => {
								setAppliedCoupon(false);
								setCouponCode('');
								setDiscount(0);
							}}
							className="text-xs text-emerald-700 font-medium hover:opacity-80"
						>
							Remover
						</button>
					</div>
				)}
			</div>

			{/* Price Summary */}
			<div className="bg-basic-50 rounded-lg border border-basic-200 p-4 space-y-2">
				<div className="flex items-center justify-between">
					<span className="text-sm text-basic-600">Subtotal</span>
					<span className="text-sm font-semibold text-basic-700">
						R$ {subtotal.toFixed(2).replace('.', ',')}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-sm text-basic-600">Taxa de entrega</span>
					<span className="text-sm font-semibold text-basic-700">
						R$ {deliveryFee.toFixed(2).replace('.', ',')}
					</span>
				</div>
				{discount > 0 && (
					<div className="flex items-center justify-between">
						<span className="text-sm text-emerald-600">Desconto</span>
						<span className="text-sm font-semibold text-emerald-600">
							- R$ {discount.toFixed(2).replace('.', ',')}
						</span>
					</div>
				)}
				<div className="pt-2 border-t border-basic-200">
					<div className="flex items-center justify-between">
						<span className="text-base font-bold text-basic-800">Total</span>
						<span className="text-lg font-bold text-basic-800">
							R$ {total.toFixed(2).replace('.', ',')}
						</span>
					</div>
				</div>
			</div>

			{/* Confirm Button */}
			<button
				onClick={handleConfirmOrder}
				disabled={isLoading}
				className="w-full bg-app text-white py-3.5 rounded-lg font-bold text-base hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
				{isLoading ? 'Processando...' : 'Finalizar pedido'}
			</button>

			{/* Terms */}
			<p className="text-xs text-basic-500 text-center px-4">
				Ao finalizar o pedido, você concorda com os{' '}
				<span className="text-app font-medium">termos e condições</span> do estabelecimento
			</p>
		</div>
	);
}

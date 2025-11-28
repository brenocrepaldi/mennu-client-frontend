import { IOrder } from '@/types/order';
import { MapPin, CreditCard, Wallet, Clock, XCircle } from 'lucide-react';
import { IRestaurant } from '@/types/restaurant';
import { paymentMethodOptions } from '@/utils/restaurantUtils';

interface OrderItemsListProps {
	items: IOrder['items'];
}

export function OrderItemsList({ items }: OrderItemsListProps) {
	return (
		<div className="space-y-4">
			<div>
				<h3 className="text-lg font-bold text-basic-800 mb-1">Itens do Pedido</h3>
				<p className="text-sm text-basic-600">
					{items.length} {items.length === 1 ? 'item' : 'itens'}
				</p>
			</div>
			<div className="space-y-3">
				{items.map((item) => (
					<div key={item.uuid} className="flex gap-4 p-3 bg-basic-50 rounded-xl">
						<img
							src={item.image}
							alt={item.name}
							className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
						/>
						<div className="flex-1 min-w-0">
							<div className="flex justify-between items-start gap-3 mb-2">
								<h4 className="font-bold text-basic-800 text-[15px] leading-tight">{item.name}</h4>
								<span className="font-bold text-basic-800 text-[15px] whitespace-nowrap">
									R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
								</span>
							</div>
							<div className="flex items-center gap-2 mb-1">
								<span className="text-sm text-basic-600">Quantidade:</span>
								<span className="text-sm font-semibold text-basic-700">{item.quantity}x</span>
								<span className="text-basic-400">•</span>
								<span className="text-sm text-basic-600">
									R$ {item.price.toFixed(2).replace('.', ',')} cada
								</span>
							</div>
							{item.observation && (
								<div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
									<p className="text-xs text-yellow-800">
										<span className="font-semibold">Observação:</span> {item.observation}
									</p>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

interface OrderDetailsInfoProps {
	order: IOrder;
	restaurant: IRestaurant;
	showCancelModal: boolean;
	handleCancelOrder: () => void;
	setShowCancelModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function OrderDetailsInfo({
	order,
	restaurant,
	showCancelModal,
	setShowCancelModal,
	handleCancelOrder,
}: OrderDetailsInfoProps) {
	// The order can be canceled only up to the "confirmed" status
	const canCancelOrder = order.status === 'pending' || order.status === 'confirmed';

	return (
		<div className="space-y-5">
			<div>
				<h3 className="text-lg font-bold text-basic-800 mb-4">Informações da Entrega</h3>

				{/* Endereço de entrega */}
				<div className="bg-basic-50 rounded-xl p-4 mb-3">
					<div className="flex gap-3">
						<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
							<MapPin size={20} className="text-app" />
						</div>
						<div className="flex-1">
							<h4 className="font-bold text-basic-800 mb-2 text-[15px]">Endereço de Entrega</h4>
							<p className="text-[15px] text-basic-800 font-medium leading-relaxed">
								{order.deliveryAddress.street}, {order.deliveryAddress.number}
							</p>
							{order.deliveryAddress.complement && (
								<p className="text-sm text-basic-600 leading-relaxed">
									{order.deliveryAddress.complement}
								</p>
							)}
							<p className="text-sm text-basic-600 leading-relaxed">
								{order.deliveryAddress.neighborhood} - {order.deliveryAddress.city}
							</p>
							<p className="text-sm text-basic-500 mt-1">CEP {order.deliveryAddress.zipCode}</p>
						</div>
					</div>
				</div>

				{/* Tempo estimado */}
				{order.status !== 'delivered' && order.status !== 'cancelled' && (
					<div className="bg-green-50 border border-green-200 rounded-xl p-4">
						<div className="flex gap-3">
							<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
								<Clock size={20} className="text-green-700" />
							</div>
							<div className="flex-1">
								<h4 className="font-bold text-green-800 mb-1 text-[15px]">
									Tempo Estimado de Entrega
								</h4>
								<p className="text-[15px] text-green-700 font-semibold">
									{restaurant.delivery.estimatedTime || '30-45 min'}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Método de pagamento */}
			<div>
				<h3 className="text-lg font-bold text-basic-800 mb-4">Pagamento</h3>
				<div className="bg-basic-50 rounded-xl p-4">
					<div className="flex gap-3">
						<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
							{order.paymentMethod === 'cash' || order.paymentMethod === 'pix' ? (
								<Wallet size={20} className="text-app" />
							) : (
								<CreditCard size={20} className="text-app" />
							)}
						</div>
						<div className="flex-1">
							<h4 className="font-bold text-basic-800 mb-2 text-[15px]">
								{paymentMethodOptions.find((option) => option.id === order.paymentMethod)?.label ||
									order.paymentMethod}
							</h4>
							<p className="text-sm text-basic-600">Pagamento na entrega</p>
							{order.paymentMethod === 'cash' && order.changeFor && (
								<p className="text-sm text-basic-700 font-medium mt-1">
									Troco para R$ {order.changeFor.toFixed(2).replace('.', ',')}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Resumo de valores */}
			<div>
				<h3 className="text-lg font-bold text-basic-800 mb-4">Resumo do Pedido</h3>
				<div className="bg-basic-50 rounded-xl p-4 space-y-3">
					<div className="flex justify-between text-[15px]">
						<span className="text-basic-600">Subtotal</span>
						<span className="font-semibold text-basic-800">
							R$ {order.subtotal.toFixed(2).replace('.', ',')}
						</span>
					</div>
					<div className="flex justify-between text-[15px]">
						<span className="text-basic-600">Taxa de Entrega</span>
						<span className="font-semibold text-basic-800">
							R$ {(restaurant.delivery.fee || 0).toFixed(2).replace('.', ',')}
						</span>
					</div>
					{order.discount > 0 && (
						<div className="flex justify-between text-[15px]">
							<span className="text-green-600">Desconto</span>
							<span className="font-semibold text-green-600">
								- R$ {order.discount.toFixed(2).replace('.', ',')}
							</span>
						</div>
					)}
					<div className="border-t border-basic-200 pt-3 mt-3 flex justify-between">
						<span className="text-lg font-bold text-basic-800">Total</span>
						<span className="text-lg font-bold text-basic-800">
							R$ {order.total.toFixed(2).replace('.', ',')}
						</span>
					</div>
				</div>
			</div>

			{/* Botão de Cancelamento */}
			<div>
				{canCancelOrder ? (
					<button
						onClick={() => {
							setShowCancelModal(true);
						}}
						className="w-full bg-app text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
					>
						<XCircle size={20} />
						Cancelar Pedido
					</button>
				) : (
					<div className="bg-basic-100 border border-basic-200 rounded-xl p-4">
						<p className="text-sm text-basic-600 text-center leading-relaxed">
							Este pedido não pode mais ser cancelado. Para cancelamentos, entre em contato
							diretamente com o restaurante.
						</p>
					</div>
				)}
			</div>

			{/* Modal de Confirmação de Cancelamento */}
			{showCancelModal && (
				<div
					className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center"
					onClick={() => {
						setShowCancelModal(false);
					}}
				>
					<div
						className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl p-6 animate-slide-up"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<div className="text-center mb-6">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<XCircle size={32} className="text-app" />
							</div>
							<h3 className="text-xl font-bold text-basic-800 mb-2">Cancelar Pedido?</h3>
							<p className="text-basic-600">
								Tem certeza que deseja cancelar o pedido{' '}
								<span className="font-semibold">{order.orderNumber}</span>? Esta ação não poderá ser
								desfeita.
							</p>
						</div>

						<div className="space-y-3">
							<button
								onClick={handleCancelOrder}
								className="w-full bg-app text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity"
							>
								Sim, Cancelar Pedido
							</button>
							<button
								onClick={() => {
									setShowCancelModal(false);
								}}
								className="w-full bg-basic-100 text-basic-800 font-semibold py-3.5 rounded-lg hover:bg-basic-200 transition-colors"
							>
								Não, Manter Pedido
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

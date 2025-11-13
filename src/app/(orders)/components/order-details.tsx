import { IOrder } from '@/types/order';
import { MapPin, CreditCard, Wallet, Clock } from 'lucide-react';

interface OrderItemsListProps {
	items: IOrder['items'];
}

export function OrderItemsList({ items }: OrderItemsListProps) {
	return (
		<div className="space-y-3">
			<h3 className="font-semibold text-basic-800">Itens do Pedido</h3>
			<div className="space-y-2">
				{items.map((item) => (
					<div key={item.uuid} className="flex gap-3 py-2">
						<img 
							src={item.image} 
							alt={item.name}
							className="w-16 h-16 object-cover rounded-lg"
						/>
						<div className="flex-1">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-medium text-basic-800">{item.name}</p>
									<p className="text-sm text-basic-600">
										Quantidade: {item.quantity}
									</p>
									{item.observation && (
										<p className="text-xs text-basic-500 mt-1">
											Obs: {item.observation}
										</p>
									)}
								</div>
								<p className="font-semibold text-basic-800">
									R$ {(item.price * item.quantity).toFixed(2)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

interface OrderDetailsInfoProps {
	order: IOrder;
}

export function OrderDetailsInfo({ order }: OrderDetailsInfoProps) {
	const paymentMethodLabels = {
		'credit-card': 'Cartão de Crédito',
		'debit-card': 'Cartão de Débito',
		'pix': 'PIX',
		'cash': 'Dinheiro'
	};

	return (
		<div className="space-y-4">
			{/* Endereço de entrega */}
			<div className="bg-basic-50 rounded-lg p-4">
				<div className="flex items-start gap-3">
					<MapPin size={20} className="text-basic-600 mt-0.5 flex-shrink-0" />
					<div>
						<h4 className="font-semibold text-basic-800 mb-1">
							Endereço de Entrega
						</h4>
						<p className="text-sm text-basic-700">
							{order.deliveryAddress.street}, {order.deliveryAddress.number}
						</p>
						{order.deliveryAddress.complement && (
							<p className="text-sm text-basic-600">
								{order.deliveryAddress.complement}
							</p>
						)}
						<p className="text-sm text-basic-600">
							{order.deliveryAddress.neighborhood} - {order.deliveryAddress.city}
						</p>
						<p className="text-sm text-basic-600">
							CEP: {order.deliveryAddress.zipCode}
						</p>
					</div>
				</div>
			</div>

			{/* Método de pagamento */}
			<div className="bg-basic-50 rounded-lg p-4">
				<div className="flex items-start gap-3">
					{order.paymentMethod === 'cash' ? (
						<Wallet size={20} className="text-basic-600 mt-0.5 flex-shrink-0" />
					) : (
						<CreditCard size={20} className="text-basic-600 mt-0.5 flex-shrink-0" />
					)}
					<div>
						<h4 className="font-semibold text-basic-800 mb-1">
							Pagamento
						</h4>
						<p className="text-sm text-basic-700">
							{paymentMethodLabels[order.paymentMethod]}
						</p>
						{order.paymentMethod === 'cash' && order.changeFor && (
							<p className="text-sm text-basic-600">
								Troco para: R$ {order.changeFor.toFixed(2)}
							</p>
						)}
						<p className="text-xs text-basic-500 mt-1">
							Pagamento na entrega
						</p>
					</div>
				</div>
			</div>

			{/* Tempo estimado */}
			{order.status !== 'delivered' && order.status !== 'cancelled' && (
				<div className="bg-basic-50 rounded-lg p-4">
					<div className="flex items-start gap-3">
						<Clock size={20} className="text-basic-600 mt-0.5 flex-shrink-0" />
						<div>
							<h4 className="font-semibold text-basic-800 mb-1">
								Tempo Estimado
							</h4>
							<p className="text-sm text-basic-700">
								{order.estimatedTime}
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Resumo de valores */}
			<div className="border-t pt-4 space-y-2">
				<div className="flex justify-between text-basic-700">
					<span>Subtotal</span>
					<span>R$ {order.subtotal.toFixed(2)}</span>
				</div>
				<div className="flex justify-between text-basic-700">
					<span>Taxa de Entrega</span>
					<span>R$ {order.deliveryFee.toFixed(2)}</span>
				</div>
				{order.discount > 0 && (
					<div className="flex justify-between text-green-600">
						<span>Desconto</span>
						<span>- R$ {order.discount.toFixed(2)}</span>
					</div>
				)}
				<div className="flex justify-between text-lg font-bold text-basic-800 pt-2 border-t">
					<span>Total</span>
					<span>R$ {order.total.toFixed(2)}</span>
				</div>
			</div>
		</div>
	);
}

import { IOrder } from '@/types/order';
import { ChevronRight, Clock } from 'lucide-react';

interface OrderCardProps {
	order: IOrder;
	onClick: () => void;
}

export function OrderCard({ order, onClick }: OrderCardProps) {
	const itemsCount = order.items.reduce((sum, item) => sum + item.quantity, 0);

	// Date formatting
	const orderDate = new Date(order.createdAt);
	const formattedDate = orderDate.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
	const formattedTime = orderDate.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
	});

	const statusLabels = {
		pending: 'Pendente',
		confirmed: 'Confirmado',
		preparing: 'Preparando',
		ready: 'Pronto',
		delivering: 'Em Entrega',
		delivered: 'Entregue',
		cancelled: 'Cancelado',
	};

	return (
		<button
			onClick={onClick}
			className="w-full bg-white rounded-2xl border border-basic-200 p-5 hover:shadow-lg hover:border-app/20 transition-all text-left active:scale-[0.98] relative overflow-hidden"
		>
			{/* Active status indicator */}
			{order.status !== 'delivered' && order.status !== 'cancelled' && (
				<div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
			)}

			<div className="flex items-start justify-between gap-3 mb-3">
				{/* Title and status */}
				<div className="flex gap-4">
					<h3 className="font-bold text-basic-800 text-lg">Pedido {order.orderNumber}</h3>
					<span
						className={`
              inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wide
              ${
								order.status === 'delivered'
									? 'bg-green-100 text-green-700'
									: order.status === 'cancelled'
									? 'bg-red-100 text-red-700'
									: order.status === 'delivering'
									? 'bg-blue-100 text-blue-700'
									: order.status === 'ready'
									? 'bg-purple-100 text-purple-700'
									: 'bg-yellow-100 text-yellow-700'
							}
            `}
					>
						{statusLabels[order.status]}
					</span>
				</div>
				<ChevronRight size={22} className="text-basic-300 flex-shrink-0" />
			</div>

			{/* Date and time */}
			<div className="flex items-center gap-1.5 mb-3">
				<Clock size={15} className="flex-shrink-0 text-basic-600" />
				<span className="text-basic-700 font-medium text-[15px] whitespace-nowrap">
					{formattedDate} às {formattedTime}
				</span>
			</div>

			{/* Compact info */}
			<div className="flex items-center gap-3">
				<div className="flex-1 flex items-center gap-2">
					<span className="text-basic-600 font-medium text-[15px]">
						{itemsCount} {itemsCount === 1 ? 'item' : 'itens'}
					</span>
					<span className="text-basic-300 text-lg">•</span>
					<span className="text-basic-800 font-bold text-[15px]">
						R$ {order.total.toFixed(2).replace('.', ',')}
					</span>
				</div>
				{/* Estimated Time (only for active orders) */}
				{order.status !== 'delivered' && order.status !== 'cancelled' && (
					<div className="flex items-center gap-1.5 text-[13px] font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
						<Clock size={14} className="flex-shrink-0" />
						<span className="whitespace-nowrap">{order.estimatedTime}</span>
					</div>
				)}
			</div>
		</button>
	);
}

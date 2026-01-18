import { Clock, CheckCircle2, Package, ChefHat, Truck, XCircle, Check } from 'lucide-react';
import { OrderStatus } from '@/types/order';
import { useRestaurantStore } from '@/store/restaurantStore';

interface OrderStatusTrackerProps {
	status: OrderStatus;
	createdAt: Date;
}

const statusConfig = {
	pending: {
		label: 'Pedido Recebido',
		icon: Clock,
		description: 'Aguardando confirmação do restaurante',
	},
	confirmed: {
		label: 'Confirmado',
		icon: CheckCircle2,
		description: 'Pedido confirmado pelo restaurante',
	},
	preparing: {
		label: 'Em Preparação',
		icon: ChefHat,
		description: 'Seu pedido está sendo preparado',
	},
	ready: {
		label: 'Pronto',
		icon: Package,
		description: 'Aguardando entregador',
	},
	delivering: {
		label: 'Saiu para Entrega',
		icon: Truck,
		description: 'Seu pedido está a caminho',
	},
	delivered: {
		label: 'Entregue',
		icon: CheckCircle2,
		description: 'Pedido entregue com sucesso',
	},
	cancelled: {
		label: 'Cancelado',
		icon: XCircle,
		description: 'Pedido cancelado',
	},
};

const statusOrder: OrderStatus[] = [
	'pending',
	'confirmed',
	'preparing',
	'ready',
	'delivering',
	'delivered',
];

export function OrderStatusTracker({ status, createdAt }: OrderStatusTrackerProps) {
	const { restaurant } = useRestaurantStore();
	const currentConfig = statusConfig[status];
	const Icon = currentConfig.icon;
	const currentIndex = statusOrder.indexOf(status);

	// Calcular tempo desde o pedido
	const now = new Date();
	const diffMinutes = Math.floor((now.getTime() - createdAt.getTime()) / 60000);

	const getTimeAgo = (minutes: number): string => {
		if (minutes < 1) return 'agora mesmo';
		if (minutes < 60) return `${String(minutes)} ${minutes === 1 ? 'minuto' : 'minutos'}`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${String(hours)} ${hours === 1 ? 'hora' : 'horas'}`;
		const days = Math.floor(hours / 24);
		if (days < 30) return `${String(days)} ${days === 1 ? 'dia' : 'dias'}`;
		const months = Math.floor(days / 30);
		if (months < 12) return `${String(months)} ${months === 1 ? 'mês' : 'meses'}`;
		const years = Math.floor(months / 12);
		return `${String(years)} ${years === 1 ? 'ano' : 'anos'}`;
	};

	const formatDate = (date: Date): string => {
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');

		return `${day}/${month}/${year} às ${hours}:${minutes}`;
	};

	// Se o pedido foi cancelado, mostrar apenas o status
	if (status === 'cancelled') {
		return (
			<div className="space-y-4">
				<div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
					<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
						<XCircle size={20} className="text-red-600" />
					</div>
					<div className="flex-1">
						<h3 className="font-semibold text-red-900">{currentConfig.label}</h3>
						<p className="text-sm text-red-700 mt-1">{currentConfig.description}</p>
					</div>
				</div>
				<div className="text-xs text-basic-500 px-1 space-y-1">
					<div>Pedido realizado há {getTimeAgo(diffMinutes)}</div>
					<div className="text-basic-400">{formatDate(createdAt)}</div>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Status atual destacado */}
			<div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
				<div className="flex items-start gap-3">
					<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
						<Icon size={20} className="text-white" strokeWidth={2.5} />
					</div>
					<div className="flex-1">
						<h3 className="font-bold text-green-900 text-lg">{currentConfig.label}</h3>
						<p className="text-sm text-green-700 mt-1">{currentConfig.description}</p>
						{status !== 'delivered' && (
							<div className="flex items-center gap-1.5 mt-3 text-sm font-medium text-green-800">
								<Clock size={16} strokeWidth={2.5} />
								<span>Previsão: {restaurant.delivery.estimatedTime || '30-45 min'}</span>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Timeline vertical com linhas de progresso */}
			<div className="relative pl-1">
				{statusOrder.map((orderStatus, index) => {
					const config = statusConfig[orderStatus];
					const StatusIcon = config.icon;
					const isCompleted = index < currentIndex;
					const isCurrent = index === currentIndex;
					const isActive = index <= currentIndex;

					return (
						<div key={orderStatus} className="relative pb-8 last:pb-0">
							{/* Linha de conexão vertical */}
							{index < statusOrder.length - 1 && (
								<div
									className="absolute left-[19px] top-10 w-0.5 h-[calc(100%-20px)] -translate-x-px"
									style={{
										background: isActive
											? 'linear-gradient(to bottom, #22c55e 0%, #22c55e 100%)'
											: '#e5e7eb',
									}}
								/>
							)}

							{/* Item do status */}
							<div className="relative flex items-start gap-4">
								{/* Indicador circular */}
								<div className="relative flex-shrink-0">
									<div
										className={`
											w-10 h-10 rounded-full flex items-center justify-center
											transition-all duration-300 relative z-10
											${
												isCompleted
													? 'bg-green-500 shadow-md shadow-green-200'
													: isCurrent
													? 'bg-green-500 shadow-lg shadow-green-300 ring-4 ring-green-100'
													: 'bg-basic-200'
											}
										`}
									>
										{isCompleted ? (
											<Check size={20} className="text-white" strokeWidth={3} />
										) : (
											<StatusIcon
												size={20}
												className={isCurrent ? 'text-white' : 'text-basic-500'}
												strokeWidth={isCurrent ? 2.5 : 2}
											/>
										)}
									</div>

									{/* Pulse animation para status atual */}
									{isCurrent && (
										<div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
									)}
								</div>

								{/* Conteúdo do status */}
								<div className="flex-1 pt-1.5">
									<h4
										className={`
										font-semibold text-sm
										${isActive ? 'text-basic-900' : 'text-basic-500'}
									`}
									>
										{config.label}
									</h4>
									{(isCurrent || isCompleted) && (
										<p className="text-xs text-basic-600 mt-1 leading-relaxed">
											{config.description}
										</p>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Rodapé com informação do tempo */}
			<div className="text-xs text-basic-500 px-1 pt-2 border-t border-basic-200 space-y-1">
				<div>Pedido realizado há {getTimeAgo(diffMinutes)}</div>
				<div className="text-basic-400">{formatDate(createdAt)}</div>
			</div>
		</div>
	);
}

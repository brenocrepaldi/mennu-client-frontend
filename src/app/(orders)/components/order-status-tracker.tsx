import { 
	Clock, 
	CheckCircle2, 
	Package, 
	ChefHat, 
	Truck, 
	XCircle 
} from 'lucide-react';
import { OrderStatus } from '@/types/order';

interface OrderStatusTrackerProps {
	status: OrderStatus;
	estimatedTime: string;
	createdAt: Date;
}

const statusConfig = {
	pending: {
		label: 'Pedido Recebido',
		icon: Clock,
		color: 'text-warning-700',
		bgColor: 'bg-warning-50',
		description: 'Aguardando confirmação do restaurante'
	},
	confirmed: {
		label: 'Confirmado',
		icon: CheckCircle2,
		color: 'text-green-700',
		bgColor: 'bg-green-50',
		description: 'Pedido confirmado'
	},
	preparing: {
		label: 'Preparando',
		icon: ChefHat,
		color: 'text-blue-700',
		bgColor: 'bg-blue-50',
		description: 'Seu pedido está sendo preparado'
	},
	ready: {
		label: 'Pronto',
		icon: Package,
		color: 'text-purple-700',
		bgColor: 'bg-purple-50',
		description: 'Aguardando entregador'
	},
	delivering: {
		label: 'Saiu para Entrega',
		icon: Truck,
		color: 'text-green-700',
		bgColor: 'bg-green-50',
		description: 'Seu pedido está a caminho'
	},
	delivered: {
		label: 'Entregue',
		icon: CheckCircle2,
		color: 'text-green-700',
		bgColor: 'bg-green-50',
		description: 'Pedido entregue com sucesso'
	},
	cancelled: {
		label: 'Cancelado',
		icon: XCircle,
		color: 'text-red-700',
		bgColor: 'bg-red-50',
		description: 'Pedido cancelado'
	}
};

const statusOrder: OrderStatus[] = [
	'pending',
	'confirmed',
	'preparing',
	'ready',
	'delivering',
	'delivered'
];

export function OrderStatusTracker({ 
	status, 
	estimatedTime,
	createdAt 
}: OrderStatusTrackerProps) {
	const currentConfig = statusConfig[status];
	const Icon = currentConfig.icon;
	const currentIndex = statusOrder.indexOf(status);

	// Calcular tempo desde o pedido
	const now = new Date();
	const diffMinutes = Math.floor((now.getTime() - createdAt.getTime()) / 60000);

	return (
		<div className="space-y-6">
			{/* Status atual com destaque */}
			<div className={`${currentConfig.bgColor} rounded-lg p-4 flex items-start gap-3`}>
				<div className={`${currentConfig.color} mt-0.5`}>
					<Icon size={24} />
				</div>
				<div className="flex-1">
					<h3 className={`font-semibold ${currentConfig.color}`}>
						{currentConfig.label}
					</h3>
					<p className="text-sm text-basic-600 mt-1">
						{currentConfig.description}
					</p>
					{status !== 'delivered' && status !== 'cancelled' && (
						<p className="text-sm text-basic-700 font-medium mt-2">
							<Clock size={14} className="inline mr-1" />
							Previsão: {estimatedTime}
						</p>
					)}
				</div>
			</div>

			{/* Timeline de progresso */}
			{status !== 'cancelled' && (
				<div className="space-y-3">
					{statusOrder.map((orderStatus, index) => {
						const config = statusConfig[orderStatus];
						const StatusIcon = config.icon;
						const isActive = index <= currentIndex;
						const isCurrent = index === currentIndex;

						return (
							<div key={orderStatus} className="flex items-center gap-3">
								{/* Indicador */}
								<div className={`
									flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
									${isActive 
										? isCurrent 
											? config.bgColor + ' ' + config.color
											: 'bg-green-100 text-green-700'
										: 'bg-basic-100 text-basic-400'
									}
								`}>
									{isActive && index < currentIndex ? (
										<CheckCircle2 size={18} />
									) : (
										<StatusIcon size={18} />
									)}
								</div>

								{/* Linha de conexão */}
								{index < statusOrder.length - 1 && (
									<div className={`
										absolute left-[15px] w-0.5 h-8 translate-y-8
										${isActive ? 'bg-green-300' : 'bg-basic-200'}
									`} />
								)}

								{/* Label */}
								<div className="flex-1">
									<p className={`text-sm font-medium ${
										isActive ? 'text-basic-800' : 'text-basic-500'
									}`}>
										{config.label}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			)}

			{/* Info do tempo decorrido */}
			{status !== 'cancelled' && (
				<div className="text-xs text-basic-500 pt-2 border-t">
					Pedido realizado há {diffMinutes} minutos
				</div>
			)}
		</div>
	);
}

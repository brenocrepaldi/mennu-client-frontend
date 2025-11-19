import { Page } from '../../components/page-template';
import { NoOrder } from './components/noOrder';
import { useOrdersModel } from './orders.model';
import { OrderCard } from './components/order-card';
import { OrderStatusTracker } from './components/order-status-tracker';
import { OrderItemsList, OrderDetailsInfo } from './components/order-details';
import { PageTransition } from '@/components/page-transition';
import { AnimatePresence } from 'framer-motion';

type OrdersViewProps = ReturnType<typeof useOrdersModel>;

export function OrdersView(props: OrdersViewProps) {
	const {
		hasOrders,
		activeOrders,
		historyOrders,
		selectedOrder,
		navDirection,
		handleSelectOrder,
		handleBackToList,
	} = props;

	if (!hasOrders) return <NoOrder />;

	const renderContent = () => {
		if (selectedOrder) {
			return (
				<div className="space-y-6">
					{/* Status do pedido */}
					<div className="bg-white rounded-2xl p-5 shadow-sm">
						<OrderStatusTracker
							status={selectedOrder.status}
							createdAt={selectedOrder.createdAt}
						/>
					</div>
					{/* Itens do pedido */}
					<div className="bg-white rounded-2xl p-5 shadow-sm">
						<OrderItemsList items={selectedOrder.items} />
					</div>
					{/* Informações de entrega e pagamento */}
					<div className="bg-white rounded-2xl p-5 shadow-sm">
						<OrderDetailsInfo order={selectedOrder} />
					</div>
				</div>
			);
		} else {
			return (
				<div className='space-y-12'>
					{/* Orders in progress */}
					{activeOrders.length > 0 && (
						<div>
							<div className="mb-4">
								<h2 className="text-xl font-bold text-basic-800">Em Andamento</h2>
								<p className="text-sm text-basic-600 mt-1">
									{activeOrders.length} {activeOrders.length === 1 ? 'pedido' : 'pedidos'} ativo
									{activeOrders.length === 1 ? '' : 's'}
								</p>
							</div>
							<div className="space-y-3">
								{activeOrders.map((order) => (
									<OrderCard
										key={order.id}
										order={order}
										onClick={() => handleSelectOrder(order.id)}
									/>
								))}
							</div>
						</div>
					)}

					<div className='w-full h-[1px] bg-basic-200 rounded-2xl'/>

					{/* Order history */}
					<div className='spcece-y-6'>
						<div className="mb-4">
							<h2 className="text-xl font-bold text-basic-800">Histórico</h2>
							<p className="text-sm text-basic-600 mt-1">
								{historyOrders.length > 0
									? `${historyOrders.length} ${
											historyOrders.length === 1 ? 'pedido realizado' : 'pedidos realizados'
									  }`
									: 'Nenhum pedido anterior'}
							</p>
						</div>
						{historyOrders.length > 0 ? (
							<div className="space-y-3">
								{historyOrders.map((order) => (
									<OrderCard
										key={order.id}
										order={order}
										onClick={() => handleSelectOrder(order.id)}
									/>
								))}
							</div>
						) : (
							<div className="bg-white rounded-lg border border-basic-200 p-8 text-center">
								<div className="w-16 h-16 bg-basic-100 rounded-full flex items-center justify-center mx-auto mb-3">
									<svg
										className="w-8 h-8 text-basic-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
								</div>
								<p className="text-basic-500 text-sm">Você ainda não tem pedidos concluídos</p>
							</div>
						)}
					</div>
				</div>
			);
		}
	};

	// View order list
	return (
		<Page
			pageHeaderLabel={selectedOrder ? `Pedido ${selectedOrder.orderNumber}` : 'Meus Pedidos'}
			pageHeaderReturnToPath="/menu"
			pageHeaderOnBack={selectedOrder ? handleBackToList : undefined}
			bgSecondary
		>
			<div className="flex-1 px-4 py-6 space-y-6 pb-16">
				<AnimatePresence mode="wait" initial={false}>
					<PageTransition key={selectedOrder ? selectedOrder.id : 'list'} direction={navDirection}>
						{renderContent()}
					</PageTransition>
				</AnimatePresence>
			</div>
		</Page>
	);
}

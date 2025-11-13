import { useState } from 'react';
import { useOrdersStore } from '@/store/ordersStore';
import { IOrder } from '@/types/order';

export const useOrdersModel = () => {
	const { orders, getOrderById } = useOrdersStore();
	const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

	const handleSelectOrder = (orderId: string) => {
		const order = getOrderById(orderId);
		if (order) {
			setSelectedOrder(order);
		}
	};

	const handleBackToList = () => {
		setSelectedOrder(null);
	};

	const hasOrders = orders.length > 0;

	// Separar pedidos em andamento e histórico
	const activeOrders = orders.filter(order => 
		order.status !== 'delivered' && order.status !== 'cancelled'
	);
	
	const historyOrders = orders.filter(order => 
		order.status === 'delivered' || order.status === 'cancelled'
	);

	return {
		orders,
		activeOrders,
		historyOrders,
		selectedOrder,
		hasOrders,
		handleSelectOrder,
		handleBackToList,
	};
};

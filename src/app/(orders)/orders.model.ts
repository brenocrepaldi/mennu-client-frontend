import { useState } from 'react';
import { useOrdersStore } from '@/store/ordersStore';
import { IOrder } from '@/types/order';

export const useOrdersModel = () => {
	const { orders, getOrderById } = useOrdersStore();
	const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
	const [navDirection, setNavDirection] = useState<'forward' | 'backward'>('forward');

	const handleSelectOrder = (orderId: string) => {
		setNavDirection('forward');
		setTimeout(() => {
			const order = getOrderById(orderId);
			if (order) setSelectedOrder(order);
		}, 0);
	};

	const handleBackToList = () => {
		setNavDirection('backward');
		setTimeout(() => {
			setSelectedOrder(null);
		}, 0);
	};

	const hasOrders = orders.length > 0;

	// Separar pedidos em andamento e histórico
	const activeOrders = orders.filter(
		(order) => order.status !== 'delivered' && order.status !== 'cancelled'
	);

	const historyOrders = orders.filter(
		(order) => order.status === 'delivered' || order.status === 'cancelled'
	);

	return {
		orders,
		activeOrders,
		historyOrders,
		selectedOrder,
		hasOrders,
		navDirection,
		handleSelectOrder,
		handleBackToList,
	};
};

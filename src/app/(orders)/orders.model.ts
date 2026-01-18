import { useState } from 'react';
import { useOrdersStore } from '@/store/ordersStore';
import { IOrder } from '@/types/order';
import { useRestaurantStore } from '@/store/restaurantStore';

export const useOrdersModel = () => {
	const { restaurant } = useRestaurantStore();
	const { orders, getOrderById } = useOrdersStore();
	const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
	const [navDirection, setNavDirection] = useState<'forward' | 'backward'>('forward');
	const [showCancelModal, setShowCancelModal] = useState(false);

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

	// Separate active and history orders
	const activeOrders = orders.filter(
		(order) => order.status !== 'delivered' && order.status !== 'cancelled'
	);

	const historyOrders = orders.filter(
		(order) => order.status === 'delivered' || order.status === 'cancelled'
	);

	const handleCancelOrder = () => {
		setShowCancelModal(false);
		// TODO: call api to cancel order
	};

	return {
		restaurant,
		orders,
		activeOrders,
		historyOrders,
		selectedOrder,
		hasOrders,
		navDirection,
		handleSelectOrder,
		handleBackToList,
		showCancelModal,
		handleCancelOrder,
		setShowCancelModal,
	};
};

import { create } from 'zustand';
import { IOrder } from '@/types/order';
import { mockOrders } from '@/mocks/orders';

interface OrdersState {
	orders: IOrder[];
	addOrder: (order: IOrder) => void;
	getOrderById: (id: string) => IOrder | undefined;
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
	orders: mockOrders,
	
	addOrder: (order) => { set((state) => ({ 
		orders: [order, ...state.orders] 
	})); },
	
	getOrderById: (id) => {
		return get().orders.find(order => order.id === id);
	},
}));

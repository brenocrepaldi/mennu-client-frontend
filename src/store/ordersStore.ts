import { create } from 'zustand';
import { IOrder } from '@/types/order';
import { mockOrders } from '@/mocks/orders';
import { createJSONStorage, persist } from 'zustand/middleware';

interface OrdersState {
	orders: IOrder[];
	addOrder: (order: IOrder) => void;
	getOrderById: (id: string) => IOrder | undefined;
}

export const useOrdersStore = create<OrdersState>()(
	persist(
		(set, get) => {
			return {
				orders: mockOrders,

				addOrder: (order) => {
					set((state) => ({
						orders: [order, ...state.orders],
					}));
				},

				getOrderById: (id) => {
					return get().orders.find((order) => order.id === id);
				},
			};
		},
		{
			name: 'orders-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ orders: state.orders }),
		}
	)
);

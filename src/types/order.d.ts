import { IBagItem } from './bag';
import { IUserAddress } from './user';

// Order-related data structures

export type OrderStatus = 
	| 'pending'        // Pedido recebido, aguardando confirmação
	| 'confirmed'      // Pedido confirmado pelo restaurante
	| 'preparing'      // Pedido em preparo
	| 'ready'          // Pedido pronto para entrega
	| 'delivering'     // Pedido saiu para entrega
	| 'delivered'      // Pedido entregue
	| 'cancelled';     // Pedido cancelado

export type PaymentMethod = 
	| 'credit-card' 
	| 'debit-card' 
	| 'pix' 
	| 'cash';

export interface IOrder {
	id: string;
	orderNumber: string; // Número do pedido (ex: "#1234")
	items: IBagItem[];
	status: OrderStatus;
	subtotal: number;
	deliveryFee: number;
	discount: number;
	total: number;
	paymentMethod: PaymentMethod;
	changeFor?: number; // Troco (apenas para dinheiro)
	deliveryAddress: IUserAddress;
	estimatedTime: string; // Tempo estimado (ex: "40-50 min")
	createdAt: Date;
	updatedAt: Date;
	restaurant: {
		name: string;
		image: string;
	};
}

import { IOrder } from '../types/order';
import { mockAddresses } from './user';

export const mockOrders: IOrder[] = [
	{
		id: '1',
		orderNumber: '#1234',
		items: [
			{
				uuid: '1',
				id: 1,
				name: 'X-Bacon',
				description: 'Pão, hambúrguer, bacon, queijo, alface, tomate',
				price: 25.90,
				image: '/assets/products/x-bacon.png',
				category: 'burgers',
				quantity: 2,
				observation: 'Sem cebola'
			},
			{
				uuid: '2',
				id: 8,
				name: 'Batata Frita',
				description: 'Porção de batata frita crocante',
				price: 15.00,
				image: '/assets/products/batata-frita.png',
				category: 'sides',
				quantity: 1,
				observation: ''
			},
			{
				uuid: '3',
				id: 12,
				name: 'Refrigerante',
				description: 'Lata 350ml',
				price: 5.00,
				image: '/assets/products/refrigerante.png',
				category: 'drinks',
				quantity: 2,
				observation: 'Coca-Cola'
			}
		],
		status: 'delivering',
		subtotal: 76.80,
		deliveryFee: 8.00,
		discount: 0,
		total: 84.80,
		paymentMethod: 'cash',
		changeFor: 100,
		deliveryAddress: mockAddresses[0],
		estimatedTime: '15-25 min',
		createdAt: new Date('2025-01-15T18:30:00'),
		updatedAt: new Date('2025-01-15T18:45:00'),
		restaurant: {
			name: 'Restaurante do Chef',
			image: '/assets/logo-restaurante.png'
		}
	},
	{
		id: '2',
		orderNumber: '#1233',
		items: [
			{
				uuid: '4',
				id: 3,
				name: 'X-Tudo',
				description: 'O mais completo! Pão, 2 hambúrgueres, bacon, queijo, ovo, alface, tomate',
				price: 32.90,
				image: '/assets/products/x-tudo.png',
				category: 'burgers',
				quantity: 1,
				observation: ''
			},
			{
				uuid: '5',
				id: 15,
				name: 'Milkshake',
				description: 'Cremoso milkshake - 500ml',
				price: 18.00,
				image: '/assets/products/milkshake.png',
				category: 'drinks',
				quantity: 1,
				observation: 'Chocolate'
			}
		],
		status: 'delivered',
		subtotal: 50.90,
		deliveryFee: 8.00,
		discount: 5.00,
		total: 53.90,
		paymentMethod: 'credit-card',
		deliveryAddress: mockAddresses[0],
		estimatedTime: '40-50 min',
		createdAt: new Date('2025-01-14T19:00:00'),
		updatedAt: new Date('2025-01-14T19:42:00'),
		restaurant: {
			name: 'Restaurante do Chef',
			image: '/assets/logo-restaurante.png'
		}
	},
	{
		id: '3',
		orderNumber: '#1230',
		items: [
			{
				uuid: '6',
				id: 10,
				name: 'Brownie',
				description: 'Brownie de chocolate com nozes',
				price: 12.00,
				image: '/assets/products/brownie.png',
				category: 'desserts',
				quantity: 2,
				observation: ''
			},
			{
				uuid: '7',
				id: 13,
				name: 'Suco Natural',
				description: 'Suco natural - 500ml',
				price: 8.00,
				image: '/assets/products/suco.png',
				category: 'drinks',
				quantity: 2,
				observation: 'Laranja'
			}
		],
		status: 'delivered',
		subtotal: 40.00,
		deliveryFee: 8.00,
		discount: 0,
		total: 48.00,
		paymentMethod: 'pix',
		deliveryAddress: mockAddresses[1],
		estimatedTime: '40-50 min',
		createdAt: new Date('2025-01-12T15:20:00'),
		updatedAt: new Date('2025-01-12T16:05:00'),
		restaurant: {
			name: 'Restaurante do Chef',
			image: '/assets/logo-restaurante.png'
		}
	}
];

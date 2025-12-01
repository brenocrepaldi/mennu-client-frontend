import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBagStore } from '../../store/bagStore';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useOrdersStore } from '@/store/ordersStore';
import { useMockUser } from '../../hooks/useMockUser';
import { mockAddresses } from '../../mocks/user';
import { IOrder } from '@/types/order';
import { toast } from 'sonner';

export const useBagModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const { user } = useMockUser();
	const {
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
	} = useBagStore();

	const [selectedAddressId, setSelectedAddressId] = useState<number>(mockAddresses[0]?.id || 1);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [currentStep, setCurrentStep] = useState<'chose-products' | 'confirm-address' | 'checkout'>(
		'chose-products'
	);
	const [navDirection, setNavDirection] = useState<'forward' | 'backward'>('forward');

	const handleStepChange = () => {
		setNavDirection('forward');
		setTimeout(() => {
			if (currentStep == 'chose-products') setCurrentStep('confirm-address');
			if (currentStep == 'confirm-address') setCurrentStep('checkout');
		}, 0);
	};

	const handleOnBack = () => {
		setNavDirection('backward');
		setTimeout(() => {
			if (currentStep === 'confirm-address') {
				setCurrentStep('chose-products');
				return;
			}
			if (currentStep === 'checkout') {
				setCurrentStep('confirm-address');
				return;
			}
			void navigate(-1);
		}, 0);
	};

	const { addOrder } = useOrdersStore();

	const handleConfirmOrder = (paymentMethod: string, changeFor?: number, discount = 0) => {
		const selectedAddress = mockAddresses.find((addr) => addr.id === selectedAddressId);

		if (!selectedAddress) {
			toast.error('Endereço não encontrado');
			return;
		}

		const deliveryFee = restaurant.delivery.fee || 0;

		// Criar o pedido
		const newOrder: IOrder = {
			id: String(Date.now()),
			orderNumber: `#${String(Math.floor(1000 + Math.random() * 9000))}`,
			items: bag.map((item) => ({ ...item })),
			status: 'pending',
			subtotal: totalPrice,
			discount: discount,
			total: totalPrice + deliveryFee - discount,
			paymentMethod: paymentMethod,
			changeFor: changeFor,
			deliveryAddress: selectedAddress,
			createdAt: new Date(),
			updatedAt: new Date(),
			restaurant: {
				name: restaurant.name || 'Restaurante',
				image: restaurant.logo || '/assets/logo-restaurante.png',
			},
		};

		addOrder(newOrder);
		toast.success('Pedido confirmado!');
		clearBag();
		void navigate('/orders');
	};

	const showFooter = currentStep !== 'checkout';

	return {
		navigate,
		restaurant,
		user,
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
		handleOnBack,
		currentStep,
		handleStepChange,
		mockAddresses,
		selectedAddressId,
		setSelectedAddressId,
		handleConfirmOrder,
		showFooter,
		navDirection,
	};
};

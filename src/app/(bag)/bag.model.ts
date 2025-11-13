import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBagStore } from '../../store/bagStore';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useMockUser } from '../../hooks/useMockUser';
import { mockAddresses } from '../../mocks/user';
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
			navigate(-1);
		}, 0);
	};

	const handleConfirmOrder = () => {
		toast.success('Pedido confirmado!');
		navigate('/orders');
		clearBag();
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

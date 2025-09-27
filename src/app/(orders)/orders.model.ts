import { useBagStore } from '../../store/bagStore';

export const useOrdersModel = () => {
	const { bag, totalPrice, getTotalItemsCount } = useBagStore();

	return { bag, totalPrice, getTotalItemsCount };
};

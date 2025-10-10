export type RestaurantStatus = 'open' | 'closed';

export type RestaurantStatusStyle = {
	label: string;
	color: string;
	border: string;
};

export const RESTAURANT_STATUS_STYLES: Record<RestaurantStatus, RestaurantStatusStyle> = {
	open: {
		label: 'Aberto',
		color: 'text-emerald-400',
		border: 'border-emerald-400',
	},
	closed: {
		label: 'Fechado',
		color: 'text-red-400',
		border: 'border-red-400',
	},
};

export const getRestaurantStatusStyle = (isOpen: boolean): RestaurantStatusStyle => {
	return isOpen ? RESTAURANT_STATUS_STYLES.open : RESTAURANT_STATUS_STYLES.closed;
};

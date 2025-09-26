import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { IProduct } from '../../types';
import { capitalize } from '../../utils/format';
import { getRestaurantStatusStyle } from './menu.messages';
import { useMenuUtils } from './menu.utils';

export const useMenuModel = () => {
	const navigate = useNavigate();
	const { restaurant, isOpen } = useRestaurantStore();
	const { categorizeMenuByCategory, scrollToCategory } = useMenuUtils();

	const [selectedCategory, setSelectedCategory] = useState<string>(
		restaurant.menu[0]?.category || ''
	);

	const categorizedMenu: Record<string, IProduct[]> = categorizeMenuByCategory(restaurant.menu);

	const restaurantStatusStyle = getRestaurantStatusStyle(isOpen);

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category);
		scrollToCategory(category);
	};

	return {
		navigate,
		restaurant,
		selectedCategory,
		categorizedMenu,
		handleCategorySelect,
		restaurantStatusStyle,
		capitalize,
	};
};

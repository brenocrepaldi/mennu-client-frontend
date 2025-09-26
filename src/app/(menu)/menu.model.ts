import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { capitalize } from '../../utils/format';
import { getRestaurantStatusStyle } from './menu.messages';
import { useMenuUtils } from './menu.utils';
import { categorizeItems } from '../../utils/restaurantUtils';

export const useMenuModel = () => {
	const navigate = useNavigate();
	const { restaurant, isOpen } = useRestaurantStore();
	const { scrollToCategory } = useMenuUtils();
	const categorizedMenu = categorizeItems(restaurant.menu);

	const [selectedCategory, setSelectedCategory] = useState<string>(
		restaurant.menu[0]?.category || ''
	);

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

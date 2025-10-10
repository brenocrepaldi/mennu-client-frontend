import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { capitalize } from '../../utils/format';
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

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category);
		scrollToCategory(category);
	};

	return {
		navigate,
		restaurant,
		isOpen,
		selectedCategory,
		categorizedMenu,
		handleCategorySelect,
		capitalize,
	};
};

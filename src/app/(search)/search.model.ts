import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useState } from 'react';
import { categorizeItems, getAllCategories } from '../../utils/restaurantUtils';

export const useSearchModel = () => {
	const navigate = useNavigate();
	const { restaurant, isOpen } = useRestaurantStore();
	const categories = getAllCategories(restaurant.menu);
	const categorizedItems = categorizeItems(restaurant.menu);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		restaurant.menu[0]?.category || ''
	);

	const MAX_SEARCH_LENGTH = 200;
	const [searchText, setSearchText] = useState<string>('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchText(e.target.value);
	};

	return {
		navigate,
		isOpen,
    categories,
		categorizedItems,
		selectedCategory,
		setSelectedCategory,
		searchText,
		MAX_SEARCH_LENGTH,
		setSearchText,
		handleSearchChange,
	};
};

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useBagStore } from '../../store/bagStore';
import { IRestaurantStore, useRestaurantStore } from '../../store/restaurantStore';
import { IProduct } from '../../types/restaurant';
import { IBagItem } from '../../types/bag';

export const useProductDetailsModel = () => {
	// Constants
	const MAX_DESCRIPTION_LINES = 3;
	const MAX_OBSERVATION_LENGTH = 200;
	const MAX_PRODUCT_ORDER = 100;

	// Hooks for navigation and store access
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const { restaurant, isOpen }: IRestaurantStore = useRestaurantStore();
	const { addItemToBag, updateItemInBag } = useBagStore();

	// Find the product by ID from the restaurant menu
	// const product: IProduct | IBagItem = restaurant?.menu.find((item) => item.id === Number(id));

	// Check if in edit mode
	const isEditMode = location.pathname.includes('/edit');

	// Find the product
	const product = useMemo<IProduct | IBagItem | null>(() => {
		if (isEditMode) {
			return location.state?.product || null;
		}
		return restaurant?.menu.find((item) => item.id === Number(id)) || null;
	}, [isEditMode, location.state, restaurant, id]);

	// State variables
	const [productCounter, setProductCounter] = useState(1);
	const [prevCounter, setPrevCounter] = useState(productCounter);
	const [readMore, setReadMore] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const [observation, setObservation] = useState<string>(
		isEditMode && product && 'observation' in product ? product.observation ?? '' : ''
	);
	const descriptionRef = useRef<HTMLSpanElement>(null);

	// Effect to check if the description exceeds the max number of lines
	useEffect(() => {
		if (descriptionRef.current) {
			const lineHeight = parseFloat(getComputedStyle(descriptionRef.current).lineHeight);
			const maxHeight = lineHeight * MAX_DESCRIPTION_LINES;
			setIsOverflowing(descriptionRef.current.scrollHeight > maxHeight);
		}
	}, []);

	// Effect to scroll to the top when the page loads
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Handles product counter updates with limits
	const handleCounterChange = (operator: number) => {
		setPrevCounter(productCounter);
		setProductCounter((prev) => Math.min(MAX_PRODUCT_ORDER, Math.max(1, prev + operator)));
	};

	// Handles adding or updating an item in the bag
	const handleBagAction = (isUpdate: boolean) => {
		if (!product || product.id === undefined) {
			console.error('Product not found or invalid product ID:', id);
			return;
		}

		const item: IBagItem = {
			...product,
			uuid: isEditMode && 'uuid' in product ? product.uuid : uuidv4(), // Generate a unique ID for the item
			quantity: productCounter, // Set the quantity based on the counter
			observation: observation.trim() || undefined, // Set the observation if not empty
		};

		if (isUpdate) {
			updateItemInBag(item);
			navigate(-1);
		} else {
			addItemToBag(item);
			navigate('/menu');
		}
	};

	return {
		MAX_OBSERVATION_LENGTH,
		MAX_PRODUCT_ORDER,
		isOpen,
		isEditMode,
		product,
		productCounter,
		descriptionRef,
		readMore,
		setReadMore,
		isOverflowing,
		observation,
		setObservation,
		handleAddItemToBag: () => handleBagAction(false),
		handleUpdateItemInBag: () => handleBagAction(true),
		prevCounter,
		handleCounterChange,
	};
};

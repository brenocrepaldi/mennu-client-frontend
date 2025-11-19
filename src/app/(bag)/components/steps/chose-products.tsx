import { NavigateFunction } from 'react-router-dom';
import { IBagItem } from '../../../../types/bag';
import { IRestaurant } from '../../../../types/restaurant';
import { BagHeader } from '../bag-header';
import { BagItemList } from '../bag-item-list';
import { OrderSummary } from '../order-summary';
import { RecommendedItems } from '../recommended-items';
import { UUIDTypes } from 'uuid';

interface ChoseProductsProps {
	navigate: NavigateFunction;
	restaurant: IRestaurant;
	bag: IBagItem[];
	deliveryFee: number;
	totalPrice: number;
	getTotalItemsCount: () => number;
	addItemToBag: (item: IBagItem) => void;
	removeItemFromBag: (uuid: UUIDTypes) => void;
	deleteItemFromBag: (uuid: UUIDTypes) => void;
	clearBag: () => void;
}

export function ChoseProducts({
	navigate,
	restaurant,
	bag,
	totalPrice,
	getTotalItemsCount,
	addItemToBag,
	removeItemFromBag,
	deleteItemFromBag,
	clearBag,
}: ChoseProductsProps) {
	return (
		<>
			{/* Header */}
			<BagHeader navigate={navigate} restaurant={restaurant} />

			{/* Item List */}
			<BagItemList
				navigate={navigate}
				bag={bag}
				getTotalItemsCount={getTotalItemsCount}
				addItemToBag={addItemToBag}
				removeItemFromBag={removeItemFromBag}
				deleteItemFromBag={deleteItemFromBag}
				clearBag={clearBag}
			/>

			{/* Also Order Section */}
			<RecommendedItems restaurant={restaurant} bag={bag} addItemToBag={addItemToBag} />

			{/* Resumo do pedido */}
			<OrderSummary totalPrice={totalPrice} deliveryFee={restaurant.delivery.fee} />
		</>
	);
}

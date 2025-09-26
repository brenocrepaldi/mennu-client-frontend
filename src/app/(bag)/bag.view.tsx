import { Page } from '../../components/page-template';
import { BagFooter } from './components/bag-footer';
import { BagHeader } from './components/bag-header';
import { BagItemList } from './components/bag-item-list';
import { OrderSummary } from './components/order-summary';
import { RecommendedItems } from './components/recommended-items';
import { EmptyBag } from './components/empty-bag';
import { useBagModel } from './bag.model';

type BagViewProps = ReturnType<typeof useBagModel>;

export function BagView(props: BagViewProps) {
	const {
		navigate,
		restaurant,
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
	} = props;

	if (!bag.length) return <EmptyBag />;

	return (
		<Page pageHeaderLabel="Sacola" bgSecondary={true}>
			<div className="px-3 pb-22">
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
				<OrderSummary totalPrice={totalPrice} />
			</div>

			{/* Footer */}
			<BagFooter navigate={navigate} totalItemsCount={totalItemsCount} totalPrice={totalPrice} />
		</Page>
	);
}

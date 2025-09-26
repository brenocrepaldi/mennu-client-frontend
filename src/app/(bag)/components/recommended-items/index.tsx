import { IBagItem, IRestaurant } from '../../../../types';
import { useRecommendedItemsModel } from './recommended-items.model';
import { RecommendedItemsView } from './recommended-items.view';

// Props for the RecommendedItems component
interface RecommendedItemsProps {
	restaurant: IRestaurant;
	bag: IBagItem[];
	addItemToBag: (item: IBagItem) => void;
}

export function RecommendedItems({ restaurant, bag, addItemToBag }: RecommendedItemsProps) {
	const methods = useRecommendedItemsModel({ bag, restaurant, addItemToBag });
	return <RecommendedItemsView {...methods} />;
}

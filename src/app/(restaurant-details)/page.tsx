import { useRestaurantDetailsModel } from './restaurant-details.model';
import { RestaurantDetailsView } from './restaurant-details.view';

export function RestaurantDetailsPage() {
	const methods = useRestaurantDetailsModel();
	return <RestaurantDetailsView {...methods} />;
}

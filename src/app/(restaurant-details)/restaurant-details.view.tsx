import { Page } from '../../components/page-template';
import { BackToMenuButton } from './components/back-to-menu-button';
import { OperatingHours } from './components/opperating-hours';
import { PaymentMethods } from './components/payment-methods';
import { RestaurantAddress } from './components/restaurant-address';
import { RestaurantInfo } from './components/restaurant-info';
import { useRestaurantDetailsModel } from './restaurant-details.model';

type RestaurantDetailsViewProps = ReturnType<typeof useRestaurantDetailsModel>;

export function RestaurantDetailsView(props: RestaurantDetailsViewProps) {
	const { navigate, restaurant, today } = props;

	return (
		<Page pageHeaderLabel="Sobre o restaurante" bgSecondary={true}>
			<RestaurantInfo restaurant={restaurant} />
			<RestaurantAddress restaurant={restaurant} />
			<OperatingHours restaurant={restaurant} today={today} />
			<PaymentMethods restaurant={restaurant} />
			<BackToMenuButton navigate={navigate} />
		</Page>
	);
}

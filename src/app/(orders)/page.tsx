import { useOrdersModel } from './orders.model';
import { OrdersView } from './orders.view';

export function OrdersPage() {
	const methods = useOrdersModel();
	return <OrdersView {...methods} />;
}

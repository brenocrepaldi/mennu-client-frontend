import { Page } from '../../components/page-template';
import { NoOrder } from './components/noOrder';
import { useOrdersModel } from './orders.model';

type OrdersViewProps = ReturnType<typeof useOrdersModel>;

export function OrdersView(props: OrdersViewProps) {
	const { bag } = props;

	if (!bag.length) return <NoOrder />;

	return (
		<Page pageHeaderLabel="Acompanhamento de Pedidos" pageHeaderReturnToPath="/menu">
			<div className="flex-1 flex flex-col gap-3 items-center justify-center">
				{/* Order details - future implementation */}
			</div>
		</Page>
	);
}

import { useProductDetailsModel } from './product-details.model';
import { ProductDetailsView } from './product-details.view';

export function ProductDetailsPage() {
	const methods = useProductDetailsModel();
	return <ProductDetailsView {...methods} />;
}

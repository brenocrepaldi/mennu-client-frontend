import { useCategoryModel } from './category.model';
import { CategoryView } from './category.view';

export function CategoryPage() {
	const methods = useCategoryModel();
	return <CategoryView {...methods} />;
}

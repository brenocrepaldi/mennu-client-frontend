import { Page } from '../../components/page-template';
import { UnavailableMessage } from '../../components/unavailble-message';
import { useCategoryModel } from './category.model';
import { ProductList } from './components/product-list';

type ProductDetailsViewProps = ReturnType<typeof useCategoryModel>;

export function CategoryView(props: ProductDetailsViewProps) {
	const { navigate, selectedCategory, productsOfSelectedCategory } = props;

	// Show message if category is not found
	if (!selectedCategory) {
		return (
			<UnavailableMessage
				pageHeaderLabel="Categoria não encontrada"
				pageHeaderReturnToPath="/menu"
			/>
		);
	}

	// Show message if category is not found
	if (!productsOfSelectedCategory || productsOfSelectedCategory.length === 0) {
		return (
			<UnavailableMessage
				pageHeaderLabel="Nenhum produto nesta categoria"
				pageHeaderReturnToPath="/menu"
			/>
		);
	}

	return (
		<Page pageHeaderLabel={selectedCategory} pageHeaderReturnToPath="/search">
			<ProductList
				navigate={navigate}
				category={selectedCategory}
				productsOfSelectedCategory={productsOfSelectedCategory}
			/>
		</Page>
	);
}

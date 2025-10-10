import { Page } from '../../components/page-template';
import { CategoryList } from './components/category-list';
import { MenuList } from './components/menu-list';
import { RestaurantHeader } from './components/restaurant-header';
import { useMenuModel } from './menu.model';

type MenuViewProps = ReturnType<typeof useMenuModel>;

export function MenuView(props: MenuViewProps) {
	const {
		navigate,
		restaurant,
		isOpen,
		selectedCategory,
		categorizedMenu,
		handleCategorySelect,
		capitalize,
	} = props;

	return (
		<Page>
			{/* Cabeçalho do Restaurante */}
			<RestaurantHeader restaurant={restaurant} navigate={navigate} isOpen={isOpen} />

			{/* Lista de Categorias */}
			<CategoryList
				categories={Object.keys(categorizedMenu)}
				selectedCategory={selectedCategory}
				handleCategorySelect={handleCategorySelect}
				capitalize={capitalize}
			/>

			{/* Lista de Produtos */}
			<MenuList categorizedMenu={categorizedMenu} navigate={navigate} capitalize={capitalize} />
		</Page>
	);
}

import { useMenuModel } from './menu.model';
import { MenuView } from './menu.view';

export function MenuPage() {
	const methods = useMenuModel();
	return <MenuView {...methods} />;
}

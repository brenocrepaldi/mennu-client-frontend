import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from './components/nav-link';
import { BookOpenText, Search, List, UserRound } from 'lucide-react';

export function Navbar() {
	const links: NavLinkProps[] = [
		{ name: 'Cardápio', icon: <BookOpenText />, link: '/menu' },
		{ name: 'Buscar', icon: <Search />, link: '/search' },
		{ name: 'Pedidos', icon: <List />, link: '/orders' },
		{ name: 'Perfil', icon: <UserRound />, link: '/profile' },
	];

	function renderNavLinks(): ReactNode {
		return links.map((item: NavLinkProps) => (
			<NavLink
				key={item.link}
				name={item.name}
				icon={item.icon}
				link={item.link}
			/>
		));
	}

	return (
		<nav className="bg-secondary fixed bottom-0 w-full h-12 border-t-1 border-basic-100">
			<ul className="flex w-full h-full">{renderNavLinks()}</ul>
		</nav>
	);
}

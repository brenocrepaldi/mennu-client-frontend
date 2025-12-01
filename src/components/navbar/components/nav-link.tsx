import { Link, useLocation } from 'react-router-dom';

export interface NavLinkProps {
	name: string;
	icon: React.ReactNode;
	link: string;
}

export function NavLink({ name, icon, link }: NavLinkProps) {
	const location = useLocation();
	const isCurrentPage =
		location.pathname === link ||
		(location.pathname === '/' && link === '/menu');

	return (
		<li className="flex-1 flex items-center justify-center">
			<Link
				to={link}
				className="flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-300 ease-in-out"
			>
				<span
					className={`inline-flex items-center justify-center w-4 h-4 ${
						isCurrentPage ? 'text-basic-900' : 'text-basic-400'
					}`}
				>
					{icon}
				</span>
				<span
					className={`font-medium text-xs ${
						isCurrentPage ? 'text-basic-900 font-bold' : 'text-basic-400'
					}`}
				>
					{name}
				</span>
			</Link>
		</li>
	);
}

import { ShoppingBag } from 'lucide-react';
import { Page } from '../../../components/page-template';

export function EmptyBag() {
	return (
		<Page pageHeaderLabel="Sacola">
			<div className="w-dvw h-120 flex flex-col items-center justify-center gap-2">
				<ShoppingBag className="size-20 text-basic-400" strokeWidth={1.5} />
				<span className="text-basic-400 font-semibold">Sacola vazia</span>
			</div>
		</Page>
	);
}

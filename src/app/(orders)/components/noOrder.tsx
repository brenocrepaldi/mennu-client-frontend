import { PackageX } from 'lucide-react';
import { Page } from '../../../components/page-template';

export function NoOrder() {
	return (
		<Page
			pageHeaderLabel="Acompanhamento de Pedidos"
			pageHeaderReturnToPath="/menu"
			className="flex flex-col"
		>
			<div className="flex-1 flex flex-col gap-3 items-center justify-center">
				<PackageX className="size-24 text-basic-300 mb-4 mt-12" />

				<span className="text-basic-600 font-bold text-lg text-center">
					Nenhum pedido em andamento
					<br /> no momento
				</span>
				<span className="text-basic-400 font-medium text-sm text-center">
					Faça um pedido e acompanhe o progresso
					<br /> dele por aqui
				</span>
			</div>
		</Page>
	);
}

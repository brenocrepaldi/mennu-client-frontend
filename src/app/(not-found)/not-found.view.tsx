import { AlertTriangleIcon } from 'lucide-react';
import { Page } from '../../components/page-template';
import { useNotFoundModel } from './not-found.model';

type NotFoundViewProps = ReturnType<typeof useNotFoundModel>;

export function NotFoundView(props: NotFoundViewProps) {
	const { handleGoHome } = props;

	return (
		<Page>
			<div className="w-full min-h-dvh bg-secondary flex flex-col items-center justify-center px-4 py-8">
				<AlertTriangleIcon className="size-16 text-app" />

				<div className="flex flex-col items-center gap-4 mt-2 mb-8 text-center max-w-sm">
					<h1 className="text-6xl font-bold text-basic-800">404</h1>
					<h2 className="text-xl font-bold text-basic-800">Página não encontrada</h2>
					<p className="text-basic-500 text-sm leading-relaxed">
						Ops! Parece que a página que você está procurando não existe ou foi movida. Não se
						preocupe, você pode navegar de volta ao cardápio.
					</p>
				</div>

				<div className="flex flex-col gap-3 w-full max-w-sm absolute px-4 bottom-8 left-1/2 -translate-x-1/2">
					<button
						onClick={handleGoHome}
						className="w-full bg-app text-secondary font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-all duration-200 active:opacity-70 active:scale-95 flex items-center justify-center gap-3 shadow-md"
					>
						<span>Voltar para o cardápio</span>
					</button>
				</div>
			</div>
		</Page>
	);
}

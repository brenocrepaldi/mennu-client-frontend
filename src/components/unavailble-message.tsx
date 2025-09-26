import { CircleSlash } from 'lucide-react';
import { Page } from './page-template';

interface UnavailableMessageProps {
	pageHeaderLabel?: string;
	pageHeaderReturnToPath?: string;
}

export function UnavailableMessage({
	pageHeaderLabel,
	pageHeaderReturnToPath,
}: UnavailableMessageProps) {
	return (
		<Page
			pageHeaderLabel={pageHeaderLabel}
			pageHeaderReturnToPath={pageHeaderReturnToPath}
		>
			<div className="bg-secondary p-4 space-y-6 shadow-bottom">
				<div className="w-fit px-4 py-2 flex gap-2 items-center justify-center bg-basic-100 rounded-lg">
					<CircleSlash className="text-basic-500 size-4" />
					<span className="text-basic-500 font-semibold text-sm">
						Indisponível
					</span>
				</div>
			</div>
		</Page>
	);
}

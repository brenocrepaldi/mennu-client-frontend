import { useNotFoundModel } from './not-found.model.ts';
import { NotFoundView } from './not-found.view.tsx';

export function NotFoundPage() {
	const methods = useNotFoundModel();
	return <NotFoundView {...methods} />;
}

import { useSuccessModel } from './success.model';
import { SuccessView } from './success.view';

export function SuccessPage() {
	const methods = useSuccessModel();
	return <SuccessView {...methods} />;
}

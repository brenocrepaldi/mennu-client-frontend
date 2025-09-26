import { useBagModel } from './bag.model';
import { BagView } from './bag.view';

export function BagPage() {
	const methods = useBagModel();
	return <BagView {...methods} />;
}

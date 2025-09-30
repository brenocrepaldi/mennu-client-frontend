import { useSearchModel } from './search.model';
import { SearchView } from './search.view';

export function SearchPage() {
	const methods = useSearchModel();
	return <SearchView {...methods} />;
}

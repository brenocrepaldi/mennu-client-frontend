import { useSearchModel } from './search.model';
import { SearchView } from './search.view';

export function Search() {
	const methods = useSearchModel();
	return <SearchView {...methods} />;
}

import { useHomeModel } from './home.model';
import { HomeView } from './home.view';

export function HomePage() {
	const methods = useHomeModel();
	return <HomeView {...methods} />;
}

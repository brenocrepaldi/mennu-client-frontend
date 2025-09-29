import { useLoginModel } from './login.model';
import { LoginView } from './login.view';

export function LoginPage() {
	const methods = useLoginModel();
	return <LoginView {...methods} />;
}

import { useRegisterModel } from './register.model';
import { RegisterView } from './register.view';

export function RegisterPage() {
	const methods = useRegisterModel();
	return <RegisterView {...methods} />;
}

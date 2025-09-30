import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useRegexValidations } from '../../utils/regexValidations';

type LoginForm = {
	email: string;
	password: string;
};

type LoginFormValidity = {
	isEmailValid: boolean;
	isPasswordValid: boolean;
};

export const useLoginModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const { emailRegex } = useRegexValidations();
	const [loginForm, setLoginForm] = useState<LoginForm>({
		email: '',
		password: '',
	});
	const [isLoginFormValid, setIsLoginFormValid] = useState<LoginFormValidity>({
		isEmailValid: false,
		isPasswordValid: false,
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleFormChange =
		(field: keyof LoginForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;

			setLoginForm((prev) => ({ ...prev, [field]: value }));

			setIsLoginFormValid((prev) => ({
				...prev,
				[field === 'email' ? 'isEmailValid' : 'isPasswordValid']:
					field === 'email' ? emailRegex.test(value) : value !== '',
			}));
		};

	const canLogin = isLoginFormValid.isEmailValid && isLoginFormValid.isPasswordValid;

	async function handleLogin(event: React.FormEvent) {
		event.preventDefault();
		if (!canLogin) return;

		setIsLoading(true);

		try {
			// const response = await fetch('/api/login', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(loginForm),
			// });

			await new Promise((resolve) => setTimeout(resolve, 1500));

			toast.success('Login realizado com sucesso!');
			console.log('Login successful:', loginForm);

			// Aqui você pode salvar o token, redirecionar, etc.
			// navigate('/menu');
		} catch (error) {
			console.error('Login error:', error);
			toast.error('Erro de conexão. Verifique sua internet e tente novamente');
		} finally {
			setIsLoading(false);
			navigate('/login/success');
		}
	}

	return {
		navigate,
		restaurant,
		loginForm,
		handleFormChange,
		isLoginFormValid,
		canLogin,
		handleLogin,
		isLoading,
	};
};

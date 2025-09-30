import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const { emailRegex, passwordRegex } = useRegexValidations();
	const [loginForm, setLoginForm] = useState<LoginForm>({
		email: '',
		password: '',
	});
	const [isLoginFormValid, setIsLoginFormValid] = useState<LoginFormValidity>({
		isEmailValid: false,
		isPasswordValid: false,
	});

	const handleFormChange =
		(field: keyof LoginForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;

			setLoginForm((prev) => ({ ...prev, [field]: value }));

			setIsLoginFormValid((prev) => ({
				...prev,
				[field === 'email' ? 'isEmailValid' : 'isPasswordValid']:
					field === 'email' ? emailRegex.test(value) : passwordRegex.test(value),
			}));
		};

	const canLogin = isLoginFormValid.isEmailValid && isLoginFormValid.isPasswordValid;

	function handleLogin(event: React.FormEvent) {
		event.preventDefault();
		if (canLogin) {
			// Handle form submission logic - future implementation
			console.log('Form submitted:', loginForm);
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
	};
};

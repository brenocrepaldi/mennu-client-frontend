import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../../store/restaurantStore';
import { useRegexValidations } from '../../utils/regexValidations';
import { useState } from 'react';

type RegisterForm = {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

type RegisterFormValidity = {
	isNameValid: boolean;
	isEmailValid: boolean;
	isPasswordValid: boolean;
	isPasswordConfirmValid: boolean;
	doPasswordsMatch: boolean;
};

export const useRegisterModel = () => {
	const navigate = useNavigate();
	const { restaurant } = useRestaurantStore();
	const { nameRegex, emailRegex, passwordRegex } = useRegexValidations();
	const [registerForm, setRegisterForm] = useState<RegisterForm>({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});
	const [isRegisterFormValid, setIsRegisterFormValid] = useState<RegisterFormValidity>({
		isNameValid: false,
		isEmailValid: false,
		isPasswordValid: false,
		isPasswordConfirmValid: false,
		doPasswordsMatch: false,
	});

	const normalizeName = (name: string): string => {
		return name.trim().replace(/\s+/g, ' ');
	};

	const validationMap = {
		name: (value: string) => nameRegex.test(normalizeName(value)),
		email: (value: string) => emailRegex.test(value.trim()),
		password: (value: string) => passwordRegex.test(value),
		passwordConfirm: (value: string) => value === registerForm.password && value.length > 0,
	};

	const validityMap = {
		name: 'isNameValid',
		email: 'isEmailValid',
		password: 'isPasswordValid',
		passwordConfirm: 'isPasswordConfirmValid',
	} as const;

	const handleFormChange =
		(field: keyof RegisterForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;

			const updatedForm = { ...registerForm, [field]: value };
			setRegisterForm(updatedForm);

			const isValid = validationMap[field](value);
			const validityKey = validityMap[field];

			const doPasswordsMatch =
				field === 'password'
					? value === updatedForm.passwordConfirm && value.length > 0
					: field === 'passwordConfirm'
					? value === updatedForm.password && value.length > 0
					: isRegisterFormValid.doPasswordsMatch;

			setIsRegisterFormValid((prev) => ({
				...prev,
				[validityKey]: isValid,
				doPasswordsMatch,
			}));
		};

	const canRegister =
		isRegisterFormValid.isNameValid &&
		isRegisterFormValid.isEmailValid &&
		isRegisterFormValid.isPasswordValid &&
		isRegisterFormValid.isPasswordConfirmValid &&
		isRegisterFormValid.doPasswordsMatch;

	function handleResgistration(event: React.FormEvent) {
		event.preventDefault();
		if (canRegister) {
			const registrationData = {
				name: normalizeName(registerForm.name),
				email: registerForm.email.trim(),
				password: registerForm.password,
			};

			// Handle form submission logic - future implementation
			console.log('Form submitted:', registrationData);
		}
	}

	return {
		navigate,
		restaurant,
		registerForm,
		handleFormChange,
		handleResgistration,
		isRegisterFormValid,
		canRegister,
	};
};

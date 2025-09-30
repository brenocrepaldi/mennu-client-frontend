import { useNavigate } from 'react-router-dom';

export function useNotFoundModel() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/menu');
	};

	return { handleGoHome };
}

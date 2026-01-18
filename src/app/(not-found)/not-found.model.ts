import { useNavigate } from 'react-router-dom';

export function useNotFoundModel() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		void navigate('/menu');
	};

	return { handleGoHome };
}

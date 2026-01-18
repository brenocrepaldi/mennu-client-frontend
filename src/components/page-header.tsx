import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
	label: string;
	returnToPath?: string;
	onBack?: () => void;
}

export function PageHeader({ label, returnToPath, onBack }: PageHeaderProps) {
	const navigate = useNavigate();

	const handleGoBack = () => {
		if (onBack) {
			onBack();
		} else if (returnToPath) {
			void navigate(returnToPath);
		} else {
			void navigate(-1);
		}
	};

	return (
		<div className="w-dvw bg-secondary flex items-center justify-center py-4 border-b-1 border-basic-200 z-10 relative">
			<ChevronLeft
				className="size-6 text-basic-800 absolute left-3"
				onClick={handleGoBack}
			/>
			<span className="font-bold text-basic-800">{label}</span>
		</div>
	);
}

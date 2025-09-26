import { ChevronLeft } from 'lucide-react';

interface BackToMenuButtonProps {
	navigate: (path: string) => void;
}

export function BackToMenuButton({ navigate }: BackToMenuButtonProps) {
	return (
		<div className="w-full flex justify-center pt-4 pb-8">
			<button
				className="px-6 py-3 flex items-center gap-2 bg-basic-50 border-1 border-basic-100 rounded-md font-semibold text-basic-700"
				onClick={() => navigate('/menu')}
			>
				<ChevronLeft className="size-5 text-basic-700" />
				Voltar para o cardápio
			</button>
		</div>
	);
}

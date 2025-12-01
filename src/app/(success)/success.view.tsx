import { ArrowLeft } from 'lucide-react';
import { Page } from '../../components/page-template';
import { useSuccessModel } from './success.model';

type SuccessViewProps = ReturnType<typeof useSuccessModel>;

export function SuccessView(props: SuccessViewProps) {
	const { navigate, restaurant, isFromLogin, isFromRegister } = props;

	return (
		<Page>
			<div className="w-full bg-secondary flex flex-col items-center gap-6 px-4 py-6 text-center shadow-bottom">
				<ArrowLeft
					className="size-6 text-basic-800 absolute left-3 top-3"
					onClick={() => void navigate(-1)}
				/>
				<img
					src={restaurant.logo}
					alt="Restaurant Logo"
					className="w-28 h-28 rounded-xl border-2 border-basic-200 object-cover"
				/>
				<div className="flex flex-col gap-4">
					<span className="text-basic-800 font-bold text-xl">
						{isFromLogin
							? 'Login realizado com sucesso!'
							: isFromRegister
							? 'Cadastro realizado com sucesso!'
							: 'Sucesso!'}
					</span>
					<span className="text-basic-500 text-sm">
						Você pode utilizar seu login em qualquer restaurante que utilize nosso aplicativo.
						Aproveite!
					</span>
				</div>
				<button
					className="w-full bg-app font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 active:opacity-70 flex items-center justify-center gap-3 cursor-pointer"
					onClick={() => void navigate('/menu')}
				>
					<span className="text-secondary font-bold flex-1">Voltar para o cardápio</span>
				</button>
			</div>
		</Page>
	);
}

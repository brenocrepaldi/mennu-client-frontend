import { Mail } from 'lucide-react';
import { Page } from '../../../components/page-template';
import { IRestaurant } from '../../../types/restaurant';
import { NavigateFunction } from 'react-router-dom';

interface NotLoggedProps {
	restaurant: IRestaurant;
	navigate: NavigateFunction;
	GoogleSvg: () => React.JSX.Element;
}

export function NotLoggedIn({ restaurant, navigate, GoogleSvg }: NotLoggedProps) {
	return (
		<Page pageHeaderLabel="Entrar" pageHeaderReturnToPath="/menu" className="flex flex-col">
			<div className="w-full bg-secondary flex flex-col items-center gap-6 px-4 py-6 text-center shadow-bottom">
				<img
					src={restaurant.logo}
					alt="Restaurant Logo"
					className="w-28 h-28 rounded-xl border-2 border-basic-200 object-cover"
				/>

				<div className="flex flex-col gap-5">
					<span className="text-basic-800 font-semibold text-lg">
						Seus pedidos com mais agilidade e <br />
						segurança
					</span>
					<span className="text-basic-500 font-medium text-sm">
						Faça login e mantenha suas informações salvas <br /> para este e os próximos pedidos
					</span>
					<span className="text-basic-500 font-medium text-xs">
						Selecione uma opção para continuar:
					</span>
				</div>

				<div className="w-full flex flex-col gap-3">
					{/* Email Login Button */}
					<button
						className="w-full bg-app font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 active:opacity-70 flex items-center justify-center gap-3 cursor-pointer"
						onClick={() => void navigate('/login')}
					>
						<Mail className="text-secondary size-5 stroke-2" />
						<span className="text-secondary font-bold flex-1">Continuar com e-mail</span>
					</button>

					{/* Google Login Button */}
					<button className="w-full bg-white border border-basic-300 font-medium px-6 py-3 rounded-lg hover:bg-basic-50 transition-colors duration-200 active:opacity-70 flex items-center justify-center gap-3 cursor-pointer">
						<GoogleSvg />
						<span className="text-basic-700 font-semibold flex-1">Continuar com Google</span>
					</button>
				</div>
			</div>
		</Page>
	);
}

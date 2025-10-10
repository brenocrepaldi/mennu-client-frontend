import { Mail, ChefHat, Sparkles } from 'lucide-react';
import { Page } from '../../components/page-template';
import { useHomeModel } from './home.model';
import { AddressBadge } from '../../components/address-badge';
import { StatusBadge } from '../../components/status-badge';

type HomeViewProps = ReturnType<typeof useHomeModel>;

export function HomeView(props: HomeViewProps) {
	const { restaurant, isOpen, GoogleSvg, handleEmailLogin, handleGoogleLogin, handleGoToMenu } =
		props;

	return (
		<Page
			bgSecondary
			className="flex flex-col gap-6 justify-between px-6 py-8 transform transition-all duration-300 ease-out translate-y-0 opacity-100 animate-[slideDown_0.3s_ease-out]"
		>
			{/* Top Section - Logo e Info */}
			<div className="flex flex-col items-center text-center space-y-4">
				{/* Logo */}
				<img
					src={restaurant.logo}
					alt={`Logo ${restaurant.name}`}
					className="relative w-24 h-24 rounded-xl border-2 border-white object-cover shadow-lg"
				/>

				{/* Restaurant Info */}
				<div className="space-y-2">
					<h1 className="text-2xl font-black text-basic-800">{restaurant.name}</h1>
					<p className="text-basic-600 text-sm font-medium max-w-xs">{restaurant.description}</p>
					<div className="flex items-center justify-center gap-2">
						<AddressBadge address={restaurant.address} />
						<StatusBadge isOpen={isOpen} />
					</div>
				</div>
			</div>

			{/* Middle Section - Welcome */}
			<div className="text-center space-y-3">
				<div className="flex items-center justify-center gap-2">
					<Sparkles className="w-5 h-5 text-app" />
					<span className="text-lg font-bold text-basic-800">Bem-vindo!</span>
				</div>
			</div>

			{/* Bottom Section - Actions */}
			<div className="space-y-3">
				<p className="text-basic-600 text-sm font-medium leading-relaxed text-center">
					Faça login para uma experiência personalizada
				</p>
				{/* Google Login */}
				<button
					onClick={handleGoogleLogin}
					className="w-full bg-white hover:bg-basic-50 border border-basic-200 hover:border-basic-300 text-basic-700 font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.98]"
				>
					<GoogleSvg />
					<span>Continuar com Google</span>
				</button>

				{/* Email Login */}
				<button
					onClick={handleEmailLogin}
					className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white hover:bg-red-50 active:bg-app/20 rounded-lg transition-colors duration-200 border border-app hover:border-app/20"
				>
					<Mail className="w-5 h-5 text-app" />
					<span className="text-app font-medium">Continuar com e-mail</span>
				</button>

				{/* Divider */}
				<div className="flex items-center gap-4 py-2 -mx-8">
					<div className="flex-1 h-px bg-basic-200" />
					<span className="text-basic-400 text-xs font-medium">ou</span>
					<div className="flex-1 h-px bg-basic-200" />
				</div>

				{/* Browse Menu */}
				<button
					onClick={handleGoToMenu}
					className="w-full bg-app hover:bg-app/90 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.98]"
				>
					<ChefHat className="w-5 h-5" />
					<span>Acessar o cardápio</span>
				</button>
			</div>
		</Page>
	);
}

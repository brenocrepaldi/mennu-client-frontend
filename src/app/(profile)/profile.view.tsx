import { User, MapPin, LogOut, ChevronRight } from 'lucide-react';
import { Page } from '../../components/page-template';
import { NotLoggedIn } from './components/not-logged-in';
import { useProfileModel } from './profile.model';

type ProfileViewProps = ReturnType<typeof useProfileModel>;

export function ProfileView(props: ProfileViewProps) {
	const { navigate, user, restaurant, isOpen, GoogleSvg, handleLogout, getUserNameInitials } =
		props;

	if (!user)
		return <NotLoggedIn navigate={navigate} restaurant={restaurant} GoogleSvg={GoogleSvg} />;

	return (
		<Page bgSecondary pageHeaderLabel={'Perfil'} pageHeaderReturnToPath={'/menu'}>
			<div className="flex-1 flex flex-col justify-between gap-12 px-4 py-6">
				<div className="flex flex-col gap-6">
					<div className="bg-white rounded-lg shadow-sm border border-basic-100 p-4">
						<div className="flex items-center gap-4">
							<div className="w-16 h-16 bg-basic-100 rounded-full flex items-center justify-center border border-basic-200">
								<span className="text-basic-700 font-semibold text-lg">
									{getUserNameInitials(user.name)}
								</span>
							</div>
							<div className="flex-1">
								<div className="flex flex-col gap-1">
									<h1 className="text-basic-800 font-bold text-xl leading-tight">{user.name}</h1>
									<span className="text-basic-500 text-sm">{user.email}</span>
									<span className="text-basic-600 text-xs font-medium bg-basic-100 px-2 py-1 rounded-md w-fit">
										{user.role === 'SUPER_ADMIN' ? 'Administrador' : user.role}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-1">
						<div className="bg-white rounded-lg shadow-sm overflow-hidden border border-basic-100">
							<button
								onClick={() => navigate('/profile/details')}
								className="w-full flex items-center justify-between p-4 hover:bg-basic-50 transition-colors duration-200 active:bg-basic-100 border-b border-basic-100"
							>
								<div className="flex items-center gap-3">
									<User className="w-5 h-5 text-basic-600" />
									<span className="text-basic-800 font-medium">Meu Perfil</span>
								</div>
								<ChevronRight className="w-5 h-5 text-basic-400" />
							</button>
							<button
								onClick={() => navigate('/profile/addresses')}
								className="w-full flex items-center justify-between p-4 hover:bg-basic-50 transition-colors duration-200 active:bg-basic-100"
							>
								<div className="flex items-center gap-3">
									<MapPin className="w-5 h-5 text-basic-600" />
									<span className="text-basic-800 font-medium">Meus Endereços</span>
								</div>
								<ChevronRight className="w-5 h-5 text-basic-400" />
							</button>
						</div>
					</div>
				</div>

				<div className="space-y-6">
					<div className="bg-white rounded-lg shadow-sm border border-basic-100 p-5">
						<div className="flex items-center gap-4">
							<div className="relative">
								<img
									src={restaurant.logo}
									alt="Logo do Restaurante"
									className="w-16 h-16 rounded-xl object-cover border-2 border-basic-200 shadow-sm"
								/>
							</div>
							<div className="flex-1">
								<div className="flex flex-col gap-1">
									<h3 className="text-basic-800 font-semibold text-lg leading-tight">
										{restaurant.name}
									</h3>
									{isOpen ? (
										<div className="flex items-center gap-2">
											<div className="flex items-center gap-1">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span className="text-green-600 text-sm font-medium">Aberto</span>
											</div>
											<span className="text-basic-400 text-sm">•</span>
											<span className="text-basic-500 text-sm">Delivery disponível</span>
										</div>
									) : (
										<div className="flex items-center gap-2">
											<div className="flex items-center gap-1">
												<div className="w-2 h-2 bg-red-500 rounded-full"></div>
												<span className="text-red-600 text-sm font-medium">Fechado</span>
											</div>
											<span className="text-basic-400 text-sm">•</span>
											<span className="text-basic-500 text-sm">Voltamos em breve</span>
										</div>
									)}
									<span className="text-basic-400 text-xs">{restaurant.description}</span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<button
							onClick={handleLogout}
							className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors duration-200 border border-basic-200 hover:border-red-200"
						>
							<LogOut className="w-5 h-5 text-red-600" />
							<span className="text-red-600 font-medium">Sair da conta</span>
						</button>
						<div className="pb-16 text-center">
							<span className="text-basic-400 text-[0.65rem]">
								Seu cadastro é válido em qualquer restaurante que utilize nosso sistema.
							</span>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}

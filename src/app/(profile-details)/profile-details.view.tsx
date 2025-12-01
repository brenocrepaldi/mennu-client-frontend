import { User, Mail, Calendar } from 'lucide-react';
import { useProfileDetailsModel } from './profile-details.model';
import { Page } from '../../components/page-template';

type ProfileDetailsViewProps = ReturnType<typeof useProfileDetailsModel>;

export function ProfileDetailsView(props: ProfileDetailsViewProps) {
	const { navigate, user, getUserNameInitials } = props;

	if (!user) {
		void navigate('not-found');
		return null;
	}

	return (
		<Page bgSecondary pageHeaderLabel={'Meu Perfil'} pageHeaderReturnToPath={'/profile'}>
			<div className="flex-1 flex flex-col justify-between gap-12 px-4 py-6">
				<div className="space-y-6">
					{/* Profile Info */}
					<div className="bg-white rounded-lg shadow-sm border border-basic-100 p-6 space-y-4">
						<div className="flex items-center gap-4">
							<div className="w-20 h-20 bg-basic-100 rounded-full flex items-center justify-center border border-basic-200">
								<span className="text-basic-700 font-bold text-2xl">
									{getUserNameInitials(user.name)}
								</span>
							</div>
							<div>
								<h3 className="text-lg font-bold text-basic-800">{user.name}</h3>
								<p className="text-basic-500">{user.email}</p>
							</div>
						</div>

						<div className="space-y-3 pt-4 border-t border-basic-100">
							<div className="flex items-center gap-3 p-3 bg-basic-50 rounded-lg">
								<User className="w-5 h-5 text-basic-600" />
								<div>
									<p className="text-sm font-medium text-basic-800">Nome completo</p>
									<p className="text-basic-600">{user.name}</p>
								</div>
							</div>

							<div className="flex items-center gap-3 p-3 bg-basic-50 rounded-lg">
								<Mail className="w-5 h-5 text-basic-600" />
								<div>
									<p className="text-sm font-medium text-basic-800">E-mail</p>
									<p className="text-basic-600">{user.email}</p>
								</div>
							</div>

							<div className="flex items-center gap-3 p-3 bg-basic-50 rounded-lg">
								<Calendar className="w-5 h-5 text-basic-600" />
								<div>
									<p className="text-sm font-medium text-basic-800">Função</p>
									<p className="text-basic-600">
										{user.role === 'SUPER_ADMIN' && 'Administrador'}
										{user.role === 'CUSTOMER' && 'Cliente'}
									</p>
								</div>
							</div>
						</div>

						<button className="w-full bg-app text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
							Editar Perfil
						</button>
					</div>
				</div>
			</div>
		</Page>
	);
}

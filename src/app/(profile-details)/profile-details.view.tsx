import { User, Mail, Calendar } from 'lucide-react';
import { useProfileDetailsModel } from './profile-details.model';
import { Page } from '../../components/page-template';
import { useState } from 'react';

type ProfileDetailsViewProps = ReturnType<typeof useProfileDetailsModel>;

export function ProfileDetailsView(props: ProfileDetailsViewProps) {
	const { navigate, user, getUserNameInitials } = props;
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState(user?.name || '');
	const [editedEmail, setEditedEmail] = useState(user?.email || '');

	if (!user) {
		void navigate('not-found');
		return null;
	}

	const handleSaveChanges = () => {
		// TODO: Implement save logic
		console.log('Saving changes:', { name: editedName, email: editedEmail });
		setIsEditing(false);
	};

	const handleCancel = () => {
		setEditedName(user.name);
		setEditedEmail(user.email);
		setIsEditing(false);
	};

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
								<div className="flex-1">
									<p className="text-sm font-medium text-basic-800 mb-1">Nome completo</p>
									{isEditing ? (
										<input
											type="text"
											value={editedName}
											onChange={(e) => {
												setEditedName(e.target.value);
											}}
											className="w-full px-3 py-2 text-sm border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
										/>
									) : (
										<p className="text-basic-600">{user.name}</p>
									)}
								</div>
							</div>

							<div className="flex items-center gap-3 p-3 bg-basic-50 rounded-lg">
								<Mail className="w-5 h-5 text-basic-600" />
								<div className="flex-1">
									<p className="text-sm font-medium text-basic-800 mb-1">E-mail</p>
									{isEditing ? (
										<input
											type="email"
											value={editedEmail}
											onChange={(e) => {
												setEditedEmail(e.target.value);
											}}
											className="w-full px-3 py-2 text-sm border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
										/>
									) : (
										<p className="text-basic-600">{user.email}</p>
									)}
								</div>
							</div>

							{user.role === 'SUPER_ADMIN' && (
								<div className="flex items-center gap-3 p-3 bg-basic-50 rounded-lg">
									<Calendar className="w-5 h-5 text-basic-600" />
									<div>
										<p className="text-sm font-medium text-basic-800">Função</p>
										<p className="text-basic-600">Administrador</p>
									</div>
								</div>
							)}
						</div>

						{isEditing ? (
							<div className="space-y-3">
								<button
									onClick={handleSaveChanges}
									className="w-full bg-app text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
								>
									Confirmar Alterações
								</button>
								<button
									onClick={handleCancel}
									className="w-full bg-basic-100 text-basic-800 py-3 px-4 rounded-lg font-medium hover:bg-basic-200 transition-colors"
								>
									Cancelar
								</button>
							</div>
						) : (
							<button
								onClick={() => {
									setIsEditing(true);
								}}
								className="w-full bg-app text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
							>
								Editar Perfil
							</button>
						)}
					</div>
				</div>
			</div>
		</Page>
	);
}

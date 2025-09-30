import { ArrowLeft } from 'lucide-react';
import { Page } from '../../components/page-template';
import { cn } from '../../utils/cn';
import { useLoginModel } from './login.model';
import { Input } from '../../components/ui/input';

type LoginViewwProps = ReturnType<typeof useLoginModel>;

export function LoginView(props: LoginViewwProps) {
	const {
		navigate,
		restaurant,
		loginForm,
		handleFormChange,
		isLoginFormValid,
		canLogin,
		handleLogin,
		isLoading,
	} = props;

	return (
		<Page>
			<div className="w-full bg-secondary flex flex-col items-center gap-6 px-4 py-6 text-center shadow-bottom">
				<ArrowLeft
					className="size-6 text-basic-800 absolute left-3 top-3"
					onClick={() => navigate(-1)}
				/>
				<img
					src={restaurant.logo}
					alt="Restaurant Logo"
					className="w-28 h-28 rounded-xl border-2 border-basic-200 object-cover"
				/>
				<div className="flex flex-col gap-2">
					<span className="text-basic-800 font-bold text-2xl">Entre ou cadastre-se</span>
					<span className="text-basic-500 font-medium text-sm">
						Insira seu e-mail abaixo para continuar
					</span>
				</div>

				<form action="submit" className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
					<Input
						type="email"
						placeholder="E-mail"
						inputValue={loginForm.email}
						handleInputChange={handleFormChange('email')}
						isValid={isLoginFormValid.isEmailValid}
						errorMessage="Informe seu e-mail"
					/>

					<Input
						type="password"
						placeholder="Senha"
						inputValue={loginForm.password}
						handleInputChange={handleFormChange('password')}
						isValid={isLoginFormValid.isPasswordValid}
					/>

					<div className="flex flex-col gap-3">
						<button
							className={cn(
								'w-full font-medium px-6 py-3 rounded-lg transition-opacity duration-200 flex items-center justify-center gap-3',
								canLogin
									? 'bg-app text-secondary cursor-pointer hover:opacity-90 active:opacity-70'
									: 'bg-basic-200 text-basic-500 cursor-not-allowed'
							)}
							disabled={!canLogin}
						>
							{isLoading ? (
								<>
									<div className="w-5 h-5 border-3 border-secondary border-t-transparent rounded-full animate-spin" />
									<span className="text-secondary font-semibold">Entrando...</span>
								</>
							) : (
								<span className="text-secondary font-semibold flex-1">Continuar</span>
							)}
						</button>

						<span className="text-sm text-basic-500">
							Não possui uma conta?{' '}
							<button
								className="text-sm text-basic-500 underline font-semibold"
								onClick={() => navigate('/register')}
							>
								Cadastrar-se
							</button>
						</span>
					</div>
				</form>
			</div>
		</Page>
	);
}

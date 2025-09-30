import { ArrowLeft } from 'lucide-react';
import { Page } from '../../components/page-template';
import { cn } from '../../utils/cn';
import { useLoginModel } from './login.model';

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
					<div>
						<input
							type="text"
							placeholder="E-mail"
							value={loginForm.email}
							onChange={handleFormChange('email')}
							className={cn(
								`flex items-center gap-4 w-full rounded-sm border text-left align-top py-2 px-4 bg-secondary transition-colors duration-200 font-medium placeholder:font-medium placeholder:text-md outline-none`,
								isLoginFormValid.isEmailValid
									? 'focus-within:border-basic-800 border-basic-200 text-basic-800 placeholder:text-basic-400'
									: loginForm.email.length > 0 &&
											'focus-within:border-red-500 border-red-500 text-red-500'
							)}
						/>
						<div className="overflow-hidden">
							{!isLoginFormValid.isEmailValid && loginForm.email.length > 0 && (
								<p className="text-sm text-red-500 mt-2 text-left transform transition-all duration-300 ease-out translate-y-0 opacity-100 animate-[slideDown_0.3s_ease-out]">
									Informe seu e-mail
								</p>
							)}
						</div>
					</div>

					<div>
						<input
							type="text"
							placeholder="Senha"
							value={loginForm.password}
							onChange={handleFormChange('password')}
							className={cn(
								`flex items-center gap-4 w-full rounded-sm border text-left align-top py-2 px-4 bg-secondary transition-colors duration-200 font-medium placeholder:font-medium placeholder:text-md outline-none `,
								isLoginFormValid.isPasswordValid
									? 'focus-within:border-basic-800 border-basic-200 text-basic-800 placeholder:text-basic-400'
									: loginForm.password.length > 0 &&
											'focus-within:border-red-500 border-red-500 text-red-500'
							)}
						/>
						<div className="overflow-hidden">
							{!isLoginFormValid.isPasswordValid && loginForm.password.length > 0 && (
								<p className="text-sm text-red-500 mt-2 text-left transform transition-all duration-300 ease-out translate-y-0 opacity-100 animate-[slideDown_0.3s_ease-out]">
									A senha deve ter ao menos 6 caracteres
								</p>
							)}
						</div>
					</div>

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
							<span className="text-secondary font-semibold flex-1">Continuar</span>
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

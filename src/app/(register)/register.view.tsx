import { Page } from '../../components/page-template';
import { useRegisterModel } from './register.model';
import { Input } from '../../components/ui/input';
import { ArrowLeft } from 'lucide-react';

type RegisterViewProps = ReturnType<typeof useRegisterModel>;

export function RegisterView(props: RegisterViewProps) {
	const {
		navigate,
		restaurant,
		registerForm,
		handleFormChange,
		handleResgistration,
		isRegisterFormValid,
		canRegister,
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
					<span className="text-basic-800 font-bold text-2xl">Complete seu cadastro</span>
					<span className="text-basic-500 text-sm">
						Estes dados nos ajudam a manter seu pedido seguro e facilitar futuros pedidos
					</span>
				</div>

				<form className="w-full flex flex-col gap-4" onSubmit={handleResgistration}>
					<Input
						placeholder="Como você será chamado"
						inputValue={registerForm.name}
						handleInputChange={handleFormChange('name')}
						label="Nome e sobrenome"
						isValid={isRegisterFormValid.isNameValid}
						errorMessage="Informe seu nome e sobrenome"
					/>

					<Input
						type="email"
						placeholder="E-mail"
						inputValue={registerForm.email}
						handleInputChange={handleFormChange('email')}
						label="E-mail"
						isValid={isRegisterFormValid.isEmailValid}
						errorMessage="Informe um e-mail válido"
					/>

					<div className="flex flex-col gap-2">
						<Input
							type="password"
							placeholder="Senha"
							inputValue={registerForm.password}
							handleInputChange={handleFormChange('password')}
							label="Senha"
							isValid={isRegisterFormValid.isPasswordValid}
							errorMessage="A senha deve ter no mínimo 6 caracteres"
						/>

						<Input
							type="password"
							placeholder="Confirmar senha"
							inputValue={registerForm.passwordConfirm}
							handleInputChange={handleFormChange('passwordConfirm')}
							isValid={isRegisterFormValid.doPasswordsMatch}
							errorMessage="As senhas não coincidem"
						/>
					</div>

					<div className="w-full text-left mt-3">
						<p className="text-xs text-basic-500 leading-relaxed">
							Ao prosseguir com o cadastro, você concorda com os <br />
							<strong className="text-app underline">
								Termos de Serviço e Política de Uso de Dados
							</strong>{' '}
							do site e do restaurante.
						</p>
					</div>

					<button
						type="submit"
						disabled={!canRegister}
						className={`w-full px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 ${
							canRegister
								? 'bg-app cursor-pointer hover:opacity-90 active:opacity-70'
								: 'bg-basic-300 cursor-not-allowed'
						}`}
					>
						{isLoading ? (
							<>
								<div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
								<span className="text-secondary font-semibold">Cadastrando...</span>
							</>
						) : (
							<span className="text-secondary font-semibold">Cadastrar-se</span>
						)}
					</button>
				</form>
			</div>
		</Page>
	);
}

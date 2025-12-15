import { X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { IUserAddress } from '@/types/user';
import { toast } from 'sonner';
import { validateCEP } from '@/utils/validateCEP';

interface AddressFormModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (address: Omit<IUserAddress, 'id' | 'icon'>) => void;
	addressToEdit?: IUserAddress;
}

export function AddressFormModal({
	isOpen,
	onClose,
	onSave,
	addressToEdit,
}: AddressFormModalProps) {
	const [isClosing, setIsClosing] = useState(false);
	const [isValidatingCep, setIsValidatingCep] = useState(false);
	const [isCepValid, setIsCepValid] = useState(!!addressToEdit);
	const [type, setType] = useState<'Casa' | 'Trabalho' | 'Outro'>(addressToEdit?.type ?? 'Casa');
	const [street, setStreet] = useState(addressToEdit?.street ?? '');
	const [number, setNumber] = useState(addressToEdit?.number ?? '');
	const [complement, setComplement] = useState(addressToEdit?.complement ?? '');
	const [neighborhood, setNeighborhood] = useState(addressToEdit?.neighborhood ?? '');
	const [city, setCity] = useState(addressToEdit?.city ?? '');
	const [zipCode, setZipCode] = useState(addressToEdit?.zipCode ?? '');

	const handleClose = () => {
		setIsClosing(true);
		onClose();
		setIsClosing(false);
	};

	const handleSave = () => {
		const address = `${street}, ${number}`;
		onSave({
			type,
			address,
			street,
			number,
			complement: complement || undefined,
			neighborhood,
			city,
			zipCode,
		});
		handleClose();
		toast.success(`Endereço ${addressToEdit ? 'atualizado' : 'adicionado'} com sucesso!`);
	};

	const isFormValid =
		isCepValid &&
		street.trim() !== '' &&
		number.trim() !== '' &&
		neighborhood.trim() !== '' &&
		city.trim() !== '' &&
		zipCode.trim() !== '';

	if (!isOpen) return null;

	const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, '').slice(0, 8);
		setZipCode(value);
		setIsCepValid(false); // reset CEP validity on change
		if (value.length === 8) {
			setIsValidatingCep(true);
			void validateCEP(value)
				.then((data) => {
					if ('erro' in data) {
						toast.error('CEP não encontrado. Por favor, verifique o valor informado.');
						setIsCepValid(false);
					} else {
						setStreet(data.logradouro);
						setNeighborhood(data.bairro);
						setCity(data.localidade);
						setIsCepValid(true); // valid CEP
					}
				})
				.finally(() => {
					setIsValidatingCep(false);
				});
		}
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-center"
			onClick={handleClose}
		>
			<div
				className={`bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[90vh] flex flex-col ${
					isClosing ? 'animate-slide-down' : 'animate-slide-up'
				}`}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-5 border-b border-basic-200">
					<h3 className="text-lg font-bold text-basic-800">
						{addressToEdit ? 'Editar Endereço' : 'Novo Endereço'}
					</h3>
					<button
						onClick={handleClose}
						className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-basic-100 transition-colors"
					>
						<X size={20} className="text-basic-600" />
					</button>
				</div>

				{/* Form */}
				<div className="flex-1 overflow-y-auto p-5 space-y-4">
					{/* Type */}
					<div>
						<label className="block text-sm font-semibold text-basic-800 mb-2">
							Tipo de endereço
						</label>
						<div className="flex gap-2">
							{(['Casa', 'Trabalho', 'Outro'] as const).map((t) => (
								<button
									key={t}
									onClick={() => {
										setType(t);
									}}
									className={`flex-1 py-2 px-4 rounded-lg border-2 font-medium text-sm transition-all ${
										type === t
											? 'border-app bg-app/5 text-app'
											: 'border-basic-200 text-basic-600 hover:border-basic-300'
									}`}
								>
									{t}
								</button>
							))}
						</div>
					</div>

					{/* CEP */}
					<div>
						<label className="block text-sm font-semibold text-basic-800 mb-2">CEP</label>
						<div className="relative">
							<input
								type="text"
								value={zipCode.replace(/(\d{5})(\d)/, '$1-$2')}
								onChange={handleCEPChange}
								placeholder="00000-000"
								maxLength={9}
								disabled={isValidatingCep}
								className="w-full px-3 py-2.5 pr-10 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20 disabled:opacity-50 disabled:cursor-not-allowed"
							/>
							{isValidatingCep && (
								<div className="absolute right-3 top-1/2 -translate-y-1/2">
									<Loader2 className="size-5 text-app animate-spin" />
								</div>
							)}
						</div>
					</div>

					{/* City */}
					<div>
						<label className="block text-sm font-semibold text-basic-800 mb-2">Cidade</label>
						<input
							type="text"
							value={city}
							onChange={(e) => {
								setCity(e.target.value);
							}}
							placeholder="Nome da cidade"
							className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
						/>
					</div>

					{/* Street */}
					<div>
						<label className="block text-sm font-semibold text-basic-800 mb-2">Rua</label>
						<input
							type="text"
							value={street}
							onChange={(e) => {
								setStreet(e.target.value);
							}}
							placeholder="Nome da rua"
							className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
						/>
					</div>

					{/* Number and Complement */}
					<div className="grid grid-cols-2 gap-3">
						<div>
							<label className="block text-sm font-semibold text-basic-800 mb-2">Número</label>
							<input
								type="number"
								value={number}
								onChange={(e) => {
									setNumber(e.target.value);
								}}
								placeholder="123"
								className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
							/>
						</div>
						{/* Neighborhood */}
						<div>
							<label className="block text-sm font-semibold text-basic-800 mb-2">Bairro</label>
							<input
								type="text"
								value={neighborhood}
								onChange={(e) => {
									setNeighborhood(e.target.value);
								}}
								placeholder="Nome do bairro"
								className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
							/>
						</div>
					</div>

					{/* Complement */}
					<div>
						<label className="block text-sm font-semibold text-basic-800 mb-2">Complemento</label>
						<input
							type="text"
							value={complement}
							onChange={(e) => {
								setComplement(e.target.value);
							}}
							placeholder="Apto 101"
							className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
						/>
					</div>
				</div>

				{/* Footer */}
				<div className="p-5 border-t border-basic-200">
					<button
						onClick={handleSave}
						disabled={!isFormValid}
						className="w-full bg-app text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{addressToEdit ? 'Salvar Alterações' : 'Adicionar Endereço'}
					</button>
				</div>
			</div>
		</div>
	);
}

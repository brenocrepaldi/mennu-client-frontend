import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { IUserAddress } from '@/types/user';

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
	const [type, setType] = useState<'Casa' | 'Trabalho' | 'Outro'>('Casa');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	const [complement, setComplement] = useState('');
	const [neighborhood, setNeighborhood] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');

	useEffect(() => {
		if (addressToEdit) {
			setType(addressToEdit.type);
			setStreet(addressToEdit.street);
			setNumber(addressToEdit.number);
			setComplement(addressToEdit.complement || '');
			setNeighborhood(addressToEdit.neighborhood);
			setCity(addressToEdit.city);
			setZipCode(addressToEdit.zipCode);
		}
	}, [addressToEdit]);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
			setIsClosing(false);
			// Reset form
			if (!addressToEdit) {
				setType('Casa');
				setStreet('');
				setNumber('');
				setComplement('');
				setNeighborhood('');
				setCity('');
				setZipCode('');
			}
		}, 300);
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
	};

	const isFormValid =
		street.trim() !== '' &&
		number.trim() !== '' &&
		neighborhood.trim() !== '' &&
		city.trim() !== '' &&
		zipCode.trim() !== '';

	if (!isOpen) return null;

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
						<input
							type="text"
							value={zipCode}
							onChange={(e) => {
								setZipCode(e.target.value);
							}}
							placeholder="00000-000"
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
								type="text"
								value={number}
								onChange={(e) => {
									setNumber(e.target.value);
								}}
								placeholder="123"
								className="w-full px-3 py-2.5 border border-basic-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-app/20"
							/>
						</div>
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

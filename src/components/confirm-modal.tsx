import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

interface ConfirmModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
	isDangerous?: boolean;
}

export function ConfirmModal({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	confirmText = 'Confirmar',
	cancelText = 'Cancelar',
	isDangerous = false,
}: ConfirmModalProps) {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
			setIsClosing(false);
		}, 200);
	};

	const handleConfirm = () => {
		onConfirm();
		handleClose();
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
			onClick={handleClose}
		>
			<div
				className={`bg-white rounded-2xl max-w-md w-full shadow-xl ${
					isClosing ? 'animate-slide-down' : 'animate-slide-up'
				}`}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{/* Header */}
				<div className="flex items-start justify-between p-6 pb-4">
					<div className="flex items-start gap-3">
						{isDangerous && (
							<div className="p-2 bg-red-50 rounded-lg">
								<AlertTriangle className="w-5 h-5 text-red-500" />
							</div>
						)}
						<div>
							<h3 className="text-lg font-bold text-basic-800">{title}</h3>
							<p className="text-sm text-basic-600 mt-2">{message}</p>
						</div>
					</div>
					<button
						onClick={handleClose}
						className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-basic-100 transition-colors shrink-0"
					>
						<X size={20} className="text-basic-600" />
					</button>
				</div>

				{/* Actions */}
				<div className="flex gap-3 p-6 pt-2">
					<button
						onClick={handleClose}
						className="flex-1 py-3 px-4 rounded-lg border-2 border-basic-200 text-basic-700 font-semibold hover:bg-basic-50 transition-colors"
					>
						{cancelText}
					</button>
					<button
						onClick={handleConfirm}
						className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
							isDangerous
								? 'bg-red-500 text-white hover:bg-red-600'
								: 'bg-app text-white hover:opacity-90'
						}`}
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}

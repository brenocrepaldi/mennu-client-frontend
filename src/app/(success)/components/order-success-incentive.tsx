import { CheckCircle, User, Gift, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

interface OrderSuccessIncentiveProps {
	isAuthenticated: boolean;
	onCreateAccount: () => void;
	onViewOrder: () => void;
}

export function OrderSuccessIncentive({
	isAuthenticated,
	onCreateAccount,
	onViewOrder,
}: OrderSuccessIncentiveProps) {
	const [showIncentive, setShowIncentive] = useState(!isAuthenticated);

	return (
		<div className="flex flex-col gap-6 px-4 py-6">
			{/* Success Message */}
			<div className="flex flex-col items-center gap-4 text-center">
				<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
					<CheckCircle size={48} className="text-green-600" />
				</div>
				<div>
					<h2 className="text-2xl font-bold text-basic-800 mb-2">Pedido Confirmado!</h2>
					<p className="text-basic-600 text-sm mt-2">Seu pedido foi enviado para o restaurante</p>
				</div>
			</div>

			{/* Incentive to Create Account (only if not authenticated) */}
			{showIncentive && (
				<div className=" rounded-xl border-2 border-green-600/50 p-5 space-y-4">
					<div className="text-center">
						<h3 className="text-lg font-bold text-basic-800 mb-1">Crie sua conta agora!</h3>
						<p className="text-sm text-basic-600">E aproveite benefícios exclusivos</p>
					</div>

					{/* Benefits List */}
					<div className="space-y-3 text-start pl-4 items-center">
						<div className="flex items-start gap-3">
							<div className="w-8 h-8 bg-green-600/10 rounded-lg flex items-center justify-center shrink-0">
								<Clock size={18} className="text-green-600" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-semibold text-basic-800">Acompanhe este pedido</p>
								<p className="text-xs text-basic-600">Veja o status em tempo real</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="w-8 h-8 bg-green-600/10 rounded-lg flex items-center justify-center shrink-0">
								<Gift size={18} className="text-green-600" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-semibold text-basic-800">Use cupons de desconto</p>
								<p className="text-xs text-basic-600">Ganhe promoções exclusivas</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="w-8 h-8 bg-green-600/10 rounded-lg flex items-center justify-center shrink-0">
								<MapPin size={18} className="text-green-600" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-semibold text-basic-800">Salve seus endereços</p>
								<p className="text-xs text-basic-600">Próximos pedidos ainda mais rápidos</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="w-8 h-8 bg-green-600/10 rounded-lg flex items-center justify-center shrink-0">
								<User size={18} className="text-green-600" />
							</div>
							<div className="flex-1">
								<p className="text-sm font-semibold text-basic-800">Histórico de pedidos</p>
								<p className="text-xs text-basic-600">Repita seus pedidos favoritos</p>
							</div>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="pt-4">
						<button
							onClick={onCreateAccount}
							className="w-full bg-green-600 text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity"
						>
							Criar Conta Agora
						</button>
						<button
							onClick={() => {
								setShowIncentive(false);
								onViewOrder();
							}}
							className="w-full text-basic-600 text-xs underline font-medium py-2 hover:text-basic-800 transition-colors"
						>
							Agora não, esperar meu pedido
						</button>
					</div>
				</div>
			)}

			{/* View Order Button (always visible) */}
			{!showIncentive && (
				<button
					onClick={onViewOrder}
					className="w-full bg-app text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity"
				>
					Ver Meu Pedido
				</button>
			)}
		</div>
	);
}

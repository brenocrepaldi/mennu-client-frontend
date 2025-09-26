interface OrderSummaryProps {
	totalPrice: number;
}

export function OrderSummary({ totalPrice }: OrderSummaryProps) {
	return (
		<div className="space-y-2 w-full">
			<div className="w-full flex items-center justify-between">
				<span className="text-[0.925rem] font-bold text-basic-800">
					Resumo de valores
				</span>
			</div>
			<div className="w-full flex items-center justify-between">
				<span className="text-xs font-semibold text-basic-500">Subtotal</span>
				<span className="text-xs font-semibold text-basic-500">
					{`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
				</span>
			</div>
			<div className="w-full flex items-center justify-between">
				<span className="text-xs font-semibold text-basic-500">
					Taxa de entrega
				</span>
				<span className="text-xs font-semibold text-emerald-700">Grátis</span>
			</div>
			<div className="w-full flex items-center justify-between">
				<span className="text-[0.925rem] font-bold">Total</span>
				<div className="flex gap-1">
					<span className="text-[0.925rem] font-semibold text-basic-800">
						{`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
					</span>
				</div>
			</div>
		</div>
	);
}

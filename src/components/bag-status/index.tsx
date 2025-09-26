import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBagStore } from '../../store/bagStore';

export function BagStatus() {
	const navigate = useNavigate();

	const { bag, totalPrice, getTotalItemsCount } = useBagStore();

	return (
		<>
			{bag.length && (
				<div className="bg-secondary fixed bottom-12 w-full h-14 px-4 shadow-basic">
					<div className="h-full flex items-center justify-between">
						<div className="flex h-full items-center gap-3">
							<div className="relative">
								<ShoppingBag className="size-6 text-basic-800" />
								<div className="absolute -bottom-1 -right-1.5 w-4 h-4 flex items-center justify-center bg-basic-800 rounded-full">
									<span className="text-basic-50 text-xs font-bold">
										{getTotalItemsCount()}
									</span>
								</div>
							</div>
							<div className="flex flex-col">
								<span className="text-basic-500 text-xs font-[500]">
									Total da sacola
								</span>
								<div className="flex gap-1">
									<span className="font-semibold text-basic-800">
										{`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
									</span>
								</div>
							</div>
						</div>
						<button
							onClick={() => navigate('/bag')}
							className="bg-app px-10 py-2 rounded-lg transition-opacity duration-200 active:opacity-50 cursor-pointer"
						>
							<span className="text-sm font-bold text-basic-50">
								Ver sacola
							</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
}

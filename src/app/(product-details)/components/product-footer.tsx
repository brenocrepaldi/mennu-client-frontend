import { Minus, Plus } from 'lucide-react';
import { IProduct } from '../../../types/restaurant';
import { AnimatePresence, motion } from 'framer-motion';

interface ProductFooterProps {
	isOpen: boolean;
	product: IProduct;
	productCounter: number;
	maxProductOrder: number;
	isEditMode: boolean;
	handleCounterChange: (operator: number) => void;
	prevCounter: number;
	handleUpdateItemInBag: () => void;
	handleAddItemToBag: () => void;
}

export function ProductFooter({
	isOpen,
	product,
	productCounter,
	maxProductOrder,
	isEditMode,
	handleCounterChange,
	prevCounter,
	handleUpdateItemInBag,
	handleAddItemToBag,
}: ProductFooterProps) {
	if (!isOpen)
		return (
			<div className="h-24 w-full fixed bottom-0 p-2 bg-secondary shadow-basic flex flex-col gap-1 items-center justify-center">
				<span className="font-bold">Estamos fechados!</span>
				<span className="text-[0.9rem] font-[500] text-basic-400 text-center">
					Não estamos aceitando pedidos, no momento.
				</span>
			</div>
		);

	return (
		<div className="h-24 w-full fixed bottom-0 px-2 py-1 bg-secondary shadow-basic flex flex-col gap-2 items-center justify-center">
			<div className="flex w-full gap-4 py-2 h-16">
				{/* Product Counter */}
				<div className="w-30 flex items-center justify-center gap-4 border border-basic-200 rounded-sm">
					{/* Decrease button */}
					<button
						className="h-full w-full flex items-center justify-center rounded-sm"
						onClick={() => handleCounterChange(-1)}
						disabled={!productCounter} // Disabled when counter is 0
					>
						<Minus
							className={`size-4 ${productCounter === 0 ? 'text-basic-300' : 'text-basic-800'}`}
							strokeWidth={3}
						/>
					</button>

					{/* Animated counter display */}
					<div className="flex items-center justify-center max-w-1">
						<AnimatePresence mode="popLayout">
							<motion.span
								key={productCounter} // Triggers animation on counter update
								initial={{ y: prevCounter > productCounter ? -10 : 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: prevCounter > productCounter ? -10 : 10, opacity: 0 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className="font-semibold text-basic-800 text-center"
							>
								{productCounter}
							</motion.span>
						</AnimatePresence>
					</div>

					{/* Increase button */}
					<button
						className="text-basic-800 h-full w-full flex items-center justify-center text-3xl rounded-sm"
						onClick={() => handleCounterChange(1)}
						disabled={productCounter === maxProductOrder} // Disabled when reaching the max limit
					>
						<Plus
							className={`size-4 ${
								productCounter === maxProductOrder ? 'text-basic-300' : 'text-basic-800'
							}`}
							strokeWidth={3}
						/>
					</button>
				</div>

				{/* Add To Bag Button */}
				<div className="flex-1 flex items-center justify-center bg-app rounded-lg px-4 transition-opacity duration-200 active:opacity-50 cursor-pointer">
					<button
						className="w-full flex justify-between items-center"
						onClick={isEditMode ? handleUpdateItemInBag : handleAddItemToBag}
					>
						<span className="font-bold text-sm text-basic-50">
							{isEditMode ? 'Atualizar' : 'Adicionar'}
						</span>
						<span className="font-bold text-sm text-basic-50">
							R${(product.price * productCounter).toFixed(2).replace('.', ',')}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

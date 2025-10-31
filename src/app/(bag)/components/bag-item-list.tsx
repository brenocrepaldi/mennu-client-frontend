import { NavigateFunction } from 'react-router-dom';
import { BagItemCard } from './bag-item-card';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { UUIDTypes } from 'uuid';
import { IBagItem } from '../../../types/bag';

interface BagItemListProps {
	navigate: NavigateFunction;
	bag: IBagItem[];
	getTotalItemsCount: () => number;
	addItemToBag: (item: IBagItem) => void;
	removeItemFromBag: (uuid: UUIDTypes) => void;
	deleteItemFromBag: (uuid: UUIDTypes) => void;
	clearBag: () => void;
}

export function BagItemList({
	navigate,
	bag,
	getTotalItemsCount,
	addItemToBag,
	removeItemFromBag,
	deleteItemFromBag,
	clearBag,
}: BagItemListProps) {
	return (
		<div className="pt-8 space-y-2">
			<div className="flex items-center justify-between">
				<span className="block font-bold text-md text-basic-800">Itens adicionados</span>
				<div
					onClick={() => {
						clearBag();
						navigate('/menu');
						toast.success('Sua sacola está vazia.');
					}}
				>
					<span className="text-xs text-app font-semibold">Limpar</span>
				</div>
			</div>
			<ul className="space-y-4 min-h-[108px]">
				{/* Garante um espaço mínimo */}
				<AnimatePresence>
					{bag.map((item) => (
						<motion.li
							key={item.id}
							layout
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="relative"
						>
							<BagItemCard
								item={item}
								navigate={navigate}
								getTotalItemsCount={getTotalItemsCount}
								addItemToBag={addItemToBag}
								removeItemFromBag={removeItemFromBag}
								deleteItemFromBag={deleteItemFromBag}
							/>
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
			<div className="w-full text-center pb-12" onClick={() => navigate('/menu')}>
				<span className="font-semibold text-sm text-app">Adicionar mais itens</span>
			</div>
		</div>
	);
}

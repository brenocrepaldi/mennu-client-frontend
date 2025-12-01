import { Minus, Pencil, Plus, Trash } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'sonner';
import { UUIDTypes } from 'uuid';
import { IBagItem } from '../../../types/bag';

const MAX_PRODUCT_ORDER = 100;

interface BagItemProps {
	item: IBagItem;
	navigate: NavigateFunction;
	getTotalItemsCount: () => number;
	addItemToBag: (item: IBagItem) => void;
	removeItemFromBag: (uuid: UUIDTypes) => void;
	deleteItemFromBag: (uuid: UUIDTypes) => void;
}

export function BagItemCard({
	item,
	navigate,
	getTotalItemsCount,
	addItemToBag,
	removeItemFromBag,
	deleteItemFromBag,
}: BagItemProps) {
	return (
		<div key={item.id} className="flex flex-col">
			<div className="flex items-start justify-between py-3">
				{/* Product Image */}
				<div className="relative">
					<img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
					<div
						className="absolute -top-0.5 -right-1 w-7.5 h-7.5 flex items-center justify-center bg-secondary rounded-full shadow-md"
						onClick={() =>
							void navigate(`/product/${String(item.id)}/edit`, {
								state: {
									product: item,
								},
							})
						}
					>
						<Pencil className="text-app size-3.25" strokeWidth={3} />
					</div>
				</div>

				{/* Product Information */}
				<div className="flex flex-col flex-1 px-3 gap-3">
					<div className="flex flex-col">
						<span className="font-bold text-basic-800">{item.name}</span>
						<span className="font-semibold text-xs text-basic-500 line-clamp-1">
							{item.description}
						</span>
						<span className="text-basic-800 text-sm font-semibold">
							R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
						</span>
					</div>
					{item.observation && (
						<div className="flex gap-1">
							<span className="text-xs font-semibold text-basic-500">Observação:</span>
							<span className="text-xs font-semibold text-basic-500">{item.observation}</span>
						</div>
					)}
				</div>

				{/* Counter */}
				<div className="w-24 flex items-center justify-between bg-basic-100 rounded-md px-2 py-1">
					{item.quantity === 1 ? (
						<button
							onClick={() => {
								deleteItemFromBag(item.uuid);
								if (!getTotalItemsCount()) {
									void navigate('/menu');
									toast.error('Sua sacola está vazia.');
								}
							}}
							className="flex items-center justify-center w-8 h-8"
						>
							<Trash className="text-app size-4" strokeWidth={2.5} />
						</button>
					) : (
						<button
							onClick={() => {
								removeItemFromBag(item.uuid);
							}}
							className="flex items-center justify-center w-8 h-8"
						>
							<Minus className="size-5 text-app" strokeWidth={2.5} />
						</button>
					)}
					<span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
					<button
						onClick={() => {
							addItemToBag(item);
						}}
						className="flex items-center justify-center w-8 h-8"
						disabled={item.quantity === MAX_PRODUCT_ORDER}
					>
						<Plus
							className={`size-5 ${
								item.quantity === MAX_PRODUCT_ORDER ? 'text-basic-300' : 'text-app'
							}`}
							strokeWidth={2.5}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

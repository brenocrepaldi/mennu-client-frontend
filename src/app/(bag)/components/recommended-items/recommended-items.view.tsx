import { Plus } from 'lucide-react';
import { useRecommendedItemsModel } from './recommended-items.model';

type RecommendedItemsViewProps = ReturnType<typeof useRecommendedItemsModel>;

export function RecommendedItemsView(props: RecommendedItemsViewProps) {
	const { navigate, hasRecommendedItems, handleAddItemToBag } = props;

	return (
		<div className="space-y-4 pb-12">
			<span className="block font-bold text-md text-basic-800">Peça também</span>
			<ul className="flex gap-3 overflow-scroll">
				{/* Map over the recommended items and display them */}
				{hasRecommendedItems.map((item) => (
					<li
						key={item.id}
						className="space-y-2 max-w-28"
						onClick={() => navigate(`/product/${item.id}`)} // Navigate to the product detail page
					>
						<div className="relative">
							{/* Product image */}
							<img
								src={item.image}
								alt={item.name}
								className="h-30 min-w-28 rounded-2xl object-cover"
							/>
							{/* Add item button (floating in the bottom-right corner) */}
							<div
								className="absolute bottom-1 right-1 w-9 h-9 flex items-center justify-center bg-secondary rounded-full"
								onClick={(e) => handleAddItemToBag(e, item)} // Add item to the bag when clicked
							>
								<Plus className="size-5 text-app" strokeWidth={2.5} />
							</div>
						</div>

						{/* Product price and name */}
						<div>
							<span className="block text-sm font-semibold text-basic-800">{`R$ ${item.price
								.toFixed(2)
								.replace('.', ',')}`}</span>
							<span className="block text-xs font-[500] text-basic-800 truncate">{item.name}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

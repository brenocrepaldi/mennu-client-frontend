import { Clock3 } from 'lucide-react';
import { getRestaurantStatusStyle } from '../utils/messages';

interface StatusBadgeProps {
	isOpen: boolean;
}

export function StatusBadge({ isOpen }: StatusBadgeProps) {
	const restaurantStatusStyle = getRestaurantStatusStyle(isOpen);

	return (
		<div
			className={`flex items-center w-fit gap-1 border-[1.5px] rounded-full px-4 py-1 ${restaurantStatusStyle.border}`}
		>
			<Clock3 className={`size-4 ${restaurantStatusStyle.color}`} />
			<span className={`text-[0.775rem] font-semibold ${restaurantStatusStyle.color}`}>
				{restaurantStatusStyle.label}
			</span>
		</div>
	);
}

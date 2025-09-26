import { IRestaurant } from '../../../types';

interface RestaurantInfoProps {
	restaurant: IRestaurant;
}

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
	return (
		<div className="flex items-center gap-3 p-5 border-b-1 border-basic-200">
			<img
				src={restaurant.logo}
				alt="Restaurant Logo"
				className="w-22 h-22 rounded-xl border-2 border-basic-200 object-cover"
			/>
			<div className="flex flex-col gap-1">
				<span className="font-extrabold text-lg text-basic-800">{restaurant.name}</span>
				<span className="text-[0.9rem] text-basic-500">{restaurant.description}</span>
			</div>
		</div>
	);
}

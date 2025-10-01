import { MapPinIcon } from 'lucide-react';
import { IRestaurant } from '../../../types/restaurant';

interface RestaurantAddressProps {
	restaurant: IRestaurant;
}

export function RestaurantAddress({ restaurant }: RestaurantAddressProps) {
	return (
		<div className="flex flex-col items-start gap-4 p-5 border-b-1 border-basic-200">
			<div className="flex gap-2 items-center w-full">
				<MapPinIcon className="size-5 text-basic-500" />
				<span className="text-[1.1rem] font-medium text-basic-800">Endereço</span>
			</div>
			<span className="text-[0.9rem] text-basic-500">
				{`${restaurant.address.street}, ${restaurant.address.number}, ${restaurant.address.neighborhood}, ${restaurant.address.city}/${restaurant.address.state}`}
			</span>
		</div>
	);
}

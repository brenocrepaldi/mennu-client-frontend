import { ChevronRight, CircleDollarSign, Clock3, MapPinIcon } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import { IRestaurant } from '../../../types';
import { RestaurantStatusStyle } from '../menu.type';

interface RestaurantHeaderProps {
	restaurant: IRestaurant;
	navigate: NavigateFunction;
	restaurantStatusStyle: RestaurantStatusStyle;
}

export function RestaurantHeader({
	restaurant,
	navigate,
	restaurantStatusStyle,
}: RestaurantHeaderProps) {
	return (
		<div className="relative w-full mb-5">
			{/* Imagem de Capa */}
			<div className="w-full h-52">
				<img
					src={restaurant.banner}
					alt="Restaurant Cover"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl" />
			</div>

			{/* Informações do Restaurante */}
			<div className="bg-secondary rounded-2xl p-3 pr-2 shadow-md -mt-10 relative">
				<div
					className="flex items-start space-x-4 max-h-24 overflow-y-hidden"
					onClick={() => navigate(`/restaurant/${restaurant.id}`)}
				>
					<img
						src={restaurant.logo}
						alt="Restaurant Logo"
						className="w-24 h-24 rounded-xl border-2 border-basic-200 object-cover"
					/>

					<div className="flex flex-col gap-3 w-full min-w-0">
						<div className="flex items-center justify-between min-w-0 transition-opacity duration-200 active:opacity-20 cursor-pointer">
							<span className="text-[1.1rem] text-basic-800 font-extrabold truncate">
								{restaurant.name}
							</span>
							<ChevronRight className="size-5 text-basic-800" />
						</div>

						{/* Detalhes */}
						<div className="space-y-2">
							<div className="w-full flex gap-2 overflow-x-auto whitespace-nowrap">
								{/* Endereço */}
								<div className="flex items-center w-fit gap-1 bg-basic-100 rounded-full px-4 py-1">
									<MapPinIcon className="size-4 text-basic-500" />
									<span className="text-basic-500 text-[0.775rem] font-semibold">
										{restaurant.address.city} - {restaurant.address.state}
									</span>
								</div>

								{/* Status */}
								<div
									className={`flex items-center w-fit gap-1 border-[1.5px] rounded-full px-4 py-1 ${restaurantStatusStyle.border}`}
								>
									<Clock3 className={`size-4 ${restaurantStatusStyle.color}`} />
									<span className={`text-[0.775rem] font-semibold ${restaurantStatusStyle.color}`}>
										{restaurantStatusStyle.label}
									</span>
								</div>
							</div>

							{/* Taxa de Entrega */}
							<div
								className="flex items-center w-fit gap-1 px-2 py-1 transition-opacity duration-200 active:opacity-20 cursor-pointer"
								onClick={(event) => {
									event.stopPropagation();
									navigate(`/calculate-delivery`);
								}}
							>
								<CircleDollarSign className="size-4 text-basic-500" />
								<span className="text-basic-500 text-xs font-bold underline">
									Calcular taxa de entrega
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import { ChevronRight, Clock, Star, Motorbike } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import { IRestaurant } from '../../../types/restaurant';
import { AddressBadge } from '../../../components/address-badge';
import { StatusBadge } from '../../../components/status-badge';

interface RestaurantHeaderProps {
	restaurant: IRestaurant;
	navigate: NavigateFunction;
	isOpen: boolean;
}

export function RestaurantHeader({ restaurant, navigate, isOpen }: RestaurantHeaderProps) {
	return (
		<div className="relative w-full mb-5">
			{/* Imagem de Capa */}
			<div className="w-full h-52">
				<img
					src={restaurant.banner}
					alt="Restaurant Cover"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-b-2xl" />
			</div>

			{/* Informações do Restaurante */}
			<div className="bg-secondary rounded-2xl p-3 pr-2 shadow-md -mt-10 relative">
				<div
					className="flex items-start space-x-4 max-h-24 overflow-y-hidden"
					onClick={() => void navigate(`/restaurant/${String(restaurant.id)}`)}
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
								<AddressBadge address={restaurant.address} />

								{/* Status */}
								<StatusBadge isOpen={isOpen} />
							</div>

							{/* Informações de Entrega */}
							<div className="flex items-center gap-2 text-xs">
								{/* Avaliação */}
								{/* <div className="flex items-center gap-1 px-2 py-1 bg-basic-100 rounded-lg">
									<Star className="size-3.5 text-yellow-500 fill-yellow-500" />
									<span className="text-basic-700 font-semibold">
										{restaurant.rating.toFixed(1)}
									</span>
									<span className="text-basic-500">({restaurant.reviews})</span>
								</div> */}

								{/* Rating */}
								<div className="flex items-center w-fit gap-1 rounded-full px-2 py-1">
									<Star className="size-3.5 text-yellow-500 fill-yellow-500" />
									<span className="text-basic-500 text-[0.775rem] font-semibold">
										{restaurant.rating.toFixed(1)}
									</span>
								</div>

								{/* ETA*/}
								<div className="flex items-center w-fit gap-1 rounded-full px-2 py-1">
									<Clock className="size-3.5 text-basic-600" />
									<span className="text-basic-500 font-medium">
										{restaurant.delivery.estimatedTime}
									</span>
								</div>

								{/* Delivery Fee */}
								<div className="flex items-center w-fit gap-1 rounded-full px-2 py-1">
									<Motorbike className="size-3.5 text-basic-600" />
									<span className="text-basic-500 font-medium">
										R$ {restaurant.delivery.fee.toFixed(2)}
									</span>
								</div>
							</div>

							{/* Calculate Delivery Fee */}
							{/* <div
								className="flex items-center w-fit gap-1 px-2 py-1 transition-opacity duration-200 active:opacity-20 cursor-pointer"
								onClick={(event) => {
									event.stopPropagation();
									void navigate(`/calculate-delivery`);
								}}
							>
								<CircleDollarSign className="size-4 text-basic-500" />
								<span className="text-basic-500 text-xs font-bold underline">
									Calcular taxa de entrega
								</span>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

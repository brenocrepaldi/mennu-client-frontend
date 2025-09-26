import { NavigateFunction } from 'react-router-dom';
import { IRestaurant } from '../../../types';

interface BagHeaderProps {
	navigate: NavigateFunction;
	restaurant: IRestaurant;
}

export function BagHeader({ navigate, restaurant }: BagHeaderProps) {
	return (
		<div className="w-full py-3 flex items-center gap-3">
			<img
				src={restaurant.logo}
				alt="Logo do Restaurante"
				className="w-14 h-14 rounded-full border border-basic-200 object-cover"
			/>
			<div className="flex flex-col">
				<div className="space-x-1 font-bold text-basic-800">
					{[restaurant.name, restaurant.address.city].join(' - ')}
				</div>
				<div onClick={() => navigate('/menu')}>
					<span className="font-semibold text-sm text-app">
						Adicionar mais itens
					</span>
				</div>
			</div>
		</div>
	);
}

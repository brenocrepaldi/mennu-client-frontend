import { Clock3 } from 'lucide-react';
import { IOperatingHours, IRestaurant } from '../../../types/restaurant';

interface OperatingHoursProps {
	restaurant: IRestaurant;
	today: string;
}

export function OperatingHours({ restaurant, today }: OperatingHoursProps) {
	return (
		<div className="flex flex-col gap-4 p-5 border-b border-basic-200">
			<div className="flex gap-2 items-center w-full">
				<Clock3 className="size-5 text-basic-500" />
				<span className="text-[1.1rem] font-medium text-basic-800">Horário de Funcionamento</span>
			</div>
			<div className="w-[65%]">
				{restaurant.operatingHours.map(({ day, open, close }: IOperatingHours) => (
					<div
						key={day}
						className={`p-1 rounded-sm flex justify-between text-[0.9rem] text-basic-600 leading-none ${
							day === today ? 'bg-basic-100' : ''
						}`}
					>
						<span className={day === today ? 'text-basic-800' : 'text-basic-500'}>
							{day.charAt(0).toUpperCase() + day.slice(1, 3).toLowerCase()}
						</span>
						<span className={day === today ? 'text-basic-800' : 'text-basic-500'}>
							{open && close ? `${open} - ${close}` : 'Closed'}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

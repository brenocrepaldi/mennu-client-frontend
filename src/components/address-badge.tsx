import { MapPinIcon } from 'lucide-react';
import { IAddress } from '../types/restaurant';

interface AddressBadgeProps {
	address: IAddress;
}

export function AddressBadge({ address }: AddressBadgeProps) {
	return (
		<div className="flex items-center w-fit gap-1 bg-basic-100 rounded-full px-4 py-1">
			<MapPinIcon className="size-4 text-basic-500" />
			<span className="text-basic-500 text-[0.775rem] font-semibold">
				{address.city} - {address.state}
			</span>
		</div>
	);
}

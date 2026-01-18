import { IRestaurant } from '@/types/restaurant';
import { paymentMethodOptions } from '@/utils/restaurantUtils';
import { CircleDollarSign } from 'lucide-react';

interface PaymentMethodsProps {
	restaurant: IRestaurant;
}

export function PaymentMethods({ restaurant }: PaymentMethodsProps) {
	return (
		<div className="flex flex-col gap-6 p-5">
			<div className="flex gap-2 items-center w-full">
				<CircleDollarSign className="size-5 text-basic-500" />
				<span className="text-[1.1rem] font-medium text-basic-800">Formas de pagamento</span>
			</div>
			<div className="w-[65%] space-y-4">
				{/* Pagamento na entrega */}
				{restaurant.paymentMethods.delivery.length > 0 && (
					<PaymentSection
						title="Pagamento na entrega"
						methods={restaurant.paymentMethods.delivery}
					/>
				)}

				{/* Pagamento Online */}
				{restaurant.paymentMethods.online && restaurant.paymentMethods.online.length > 0 && (
					<PaymentSection title="Pagamento Online" methods={restaurant.paymentMethods.online} />
				)}
			</div>
		</div>
	);
}

interface PaymentSectionProps {
	title: string;
	methods: string[];
}

const PaymentSection = ({ title, methods }: PaymentSectionProps) => (
	<div className="space-y-3">
		<span className="text-basic-600 font-semibold text-xs block">{title}</span>
		<div className="flex flex-wrap gap-2 mt-1">
			{methods.map((item, index) => (
				<span
					key={index}
					className="px-2 py-1 bg-basic-100 rounded font-semibold text-basic-800 text-sm"
				>
					{paymentMethodOptions.find((option) => option.id === item)?.label || item}
				</span>
			))}
		</div>
	</div>
);

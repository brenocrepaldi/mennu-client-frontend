interface ProductInfoProps {
	name: string;
	description: string;
	price: number;
	isOverflowing: boolean;
	readMore: boolean;
	setReadMore: (value: boolean) => void;
	descriptionRef: React.RefObject<HTMLSpanElement | null>;
}

export function ProductInfo({
	name,
	description,
	price,
	isOverflowing,
	readMore,
	setReadMore,
	descriptionRef,
}: ProductInfoProps) {
	return (
		<div className="flex flex-col items-start gap-3">
			<span className="font-extrabold text-[1.1rem] text-basic-800">
				{name}
			</span>

			<div className="space-y-1">
				<span
					ref={descriptionRef}
					className={`font-[500] text-[0.975rem] text-basic-400 transition-all ${
						readMore ? 'line-clamp-none' : 'line-clamp-3'
					}`}
				>
					{description}
				</span>
				{isOverflowing && (
					<button
						onClick={() => { setReadMore(!readMore); }}
						className="text-basic-800 font-semibold text-[0.975rem] underline"
					>
						{readMore ? 'Ver menos' : 'Ver mais'}
					</button>
				)}
			</div>

			<span className="text-zinc-700 font-semibold">
				R${price.toFixed(2).replace('.', ',')}
			</span>
		</div>
	);
}

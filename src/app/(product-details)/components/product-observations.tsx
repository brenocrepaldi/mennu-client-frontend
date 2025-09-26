interface ObservationsFieldProps {
	observation: string;
	setObservation: (value: string) => void;
	maxLength: number;
}

export function ObservationsField({
	observation,
	setObservation,
	maxLength,
}: ObservationsFieldProps) {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= maxLength) {
			setObservation(e.target.value);
		}
	};

	return (
		<div className="py-10 pb-36 px-4 space-y-3">
			<div className="flex flex-col gap-4">
				<span className="text-lg font-extrabold">Observações</span>
				<div className="space-y-2">
					<textarea
						placeholder="Digite aqui as observações..."
						value={observation}
						onChange={handleChange}
						maxLength={maxLength}
						className="min-h-24 w-full bg-secondary rounded-sm text-basic-500 placeholder:text-basic-300 placeholder:font-[500] placeholder:text-md text-left align-top py-2 px-4 outline-none focus:ring-0 focus:border-transparent"
					/>
					<div className="flex justify-end">
						<span className="text-zinc-500 font-semibold text-sm">
							{observation.length}/{maxLength}
						</span>
					</div>
				</div>
			</div>

			<span className="text-basic-500 font-semibold text-sm">
				Modificações que alterem o valor do produto não são permitidas neste
				campo. Caso precise de uma personalização que impacte no valor, entre em
				contato com o estabelecimento.
			</span>
		</div>
	);
}

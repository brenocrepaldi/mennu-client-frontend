import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: string;
	className?: string;
	inputValue: string;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	label?: string;
	isValid?: boolean;
	errorMessage?: string;
}

export function Input({
	type = 'text',
	className,
	inputValue,
	handleInputChange,
	placeholder,
	label,
	isValid = true,
	errorMessage,
	...props
}: InputProps) {
	const hasError = !isValid && inputValue.length > 0;

	return (
		<div className="flex flex-col w-full">
			{label && (
				<span className="text-basic-800 font-semibold text-left text-sm mb-1">{label}</span>
			)}
			<input
				type={type}
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInputChange}
				className={cn(
					'flex items-center gap-4 w-full rounded-sm border-[1.5px] text-left align-top py-2 px-4 bg-secondary transition-colors duration-200 font-medium placeholder:font-medium placeholder:text-md outline-none',
					hasError
						? 'focus-within:border-red-500 border-red-500 text-red-500'
						: 'focus-within:border-basic-800 border-basic-200 text-basic-800 placeholder:text-basic-300',
					className
				)}
				{...props}
			/>
			<div className="overflow-hidden">
				{hasError && errorMessage && (
					<p className="text-xs text-red-500 mt-2 text-left transform transition-all duration-300 ease-out translate-y-0 opacity-100 animate-[slideDown_0.3s_ease-out]">
						{errorMessage}
					</p>
				)}
			</div>
		</div>
	);
}

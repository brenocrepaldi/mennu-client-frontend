import { Search } from 'lucide-react';
import { useSearchModel } from './search.model';
import { UnavailableMessage } from '../../components/unavailble-message';

type SearchViewProps = ReturnType<typeof useSearchModel>;

export function SearchView(props: SearchViewProps) {
	const { navigate, isOpen, categories, searchText, handleSearchChange, MAX_SEARCH_LENGTH } = props;

	if (!isOpen) return <UnavailableMessage label="Restaurante Fechado no momento" />;

	return (
		<div className="bg-secondary">
			{/* Search Bar - Sticky */}
			<div className="sticky top-0 z-10 bg-secondary p-4 pb-2">
				<div className="flex items-center gap-4 w-full rounded-sm border border-basic-300 text-left align-top py-2.5 px-4 bg-secondary">
					<Search className="size-5 text-basic-500" />
					<input
						type="text"
						placeholder="Buscar produtos"
						value={searchText}
						onChange={handleSearchChange}
						maxLength={MAX_SEARCH_LENGTH}
						className="w-full text-basic-800 placeholder:text-basic-400 placeholder:font-semibold placeholder:text-md outline-none focus:ring-0 bg-transparent"
					/>
				</div>
			</div>

			{/* Categories Section */}
			<div className="flex-1 px-4">
				<h2 className="text-md font-bold text-basic-800 mb-4 pt-2">Categorias</h2>

				<div className="flex flex-wrap gap-4">
					{categories.map((category: string, index: number) => (
						<button
							key={index}
							onClick={() => navigate(`/category/${category}`)}
							className="bg-white rounded-full px-4 py-2 text-center border border-basic-200 hover:border-basic-300 transition-opacity duration-200 active:opacity-20 cursor-pointer"
						>
							<span className="text-basic-800 font-medium text-md">{category}</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

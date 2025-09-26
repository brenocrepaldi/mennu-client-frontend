import { Search } from 'lucide-react';
import { Page } from '../../components/page-template';
import { useSearchModel } from './search.model';
import { UnavailableMessage } from '../../components/unavailble-message';

type SearchViewProps = ReturnType<typeof useSearchModel>;

export function SearchView(props: SearchViewProps) {
	const {
		isOpen,
		categories,
		setSelectedCategory,
		searchText,
		handleSearchChange,
		MAX_SEARCH_LENGTH,
	} = props;

	if (!isOpen) return <UnavailableMessage label="Restaurante Fechado no momento" />;

	return (
		<Page bgSecondary className="p-4 flex flex-col min-h-screen pb-20">
			{/* Search Bar */}
			<div className="flex items-center gap-4 w-full rounded-sm border border-basic-300 text-left align-top py-2.5 px-4 bg-white">
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

			{/* Categories Section */}
			<div className="mt-6 flex-1">
				<h2 className="text-md font-bold text-basic-800 mb-4">Categorias</h2>

				<div className="flex flex-wrap gap-4">
					{categories.map((category: string, index: number) => (
						<button
							key={index}
							onClick={() => setSelectedCategory(category)}
							className="bg-white rounded-full px-4 py-2 text-center border border-basic-200 hover:border-basic-300 transition-opacity duration-200 active:opacity-20 cursor-pointer"
						>
							<span className="text-basic-800 font-medium text-md">{category}</span>
						</button>
					))}
				</div>
			</div>
		</Page>
	);
}

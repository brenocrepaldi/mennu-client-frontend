import { CircleX, Search } from 'lucide-react';
import { useSearchModel } from './search.model';

type SearchViewProps = ReturnType<typeof useSearchModel>;

export function SearchView(props: SearchViewProps) {
	const {
		navigate,
		categories,
		searchMode,
		setSearchMode,
		searchText,
		searchResults,
		isSearching,
		hasResults,
		clearSearch,
		handleSearchChange,
		MAX_SEARCH_LENGTH,
	} = props;

	return (
		<div className="bg-secondary flex flex-col gap-3">
			{/* Search Bar - Sticky */}
			<div className="sticky top-0 z-10 bg-secondary p-4 pb-2">
				<div className="flex relative items-center gap-4 w-full rounded-sm border focus-within:border-basic-800 border-basic-300 text-left align-top py-2.5 px-4 bg-secondary transition-colors duration-200">
					<Search className="size-5 text-basic-500" />
					<input
						type="text"
						placeholder="Buscar produtos"
						value={searchText}
						onChange={handleSearchChange}
						maxLength={MAX_SEARCH_LENGTH}
						onClick={() => { setSearchMode(true); }}
						className="w-full text-basic-800 font-medium placeholder:text-basic-400 placeholder:font-semibold placeholder:text-md outline-none bg-transparent"
					/>
					{searchMode && (
						<CircleX
							className="size-4 text-basic-500 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={clearSearch}
						/>
					)}
				</div>
			</div>

			{searchMode ? (
				<div className="flex-1 px-4">
					{/* Search Results Section */}
					{searchText === '' ? (
						<span className="text-basic-400 font-medium text-sm">
							Digite algo para buscar produtos
						</span>
					) : isSearching ? (
						<div className="flex flex-col items-center gap-2 py-8">
							<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-basic-400"></div>
							<span className="text-basic-400 font-medium text-sm">Buscando produtos...</span>
						</div>
					) : hasResults ? (
						<div>
							<h2 className="text-md font-bold text-basic-800 mb-4 pt-2">
								{searchResults.length} produto{searchResults.length !== 1 ? 's' : ''} encontrado
								{searchResults.length !== 1 ? 's' : ''}
							</h2>
							<div className="grid gap-4">
								{searchResults.map((product) => (
									<div
										key={product.id}
										onClick={() => void navigate(`/product/${String(product.id)}`)}
										className="bg-white rounded-lg p-4 border border-basic-200 hover:border-basic-300 transition-all duration-200 active:opacity-70 cursor-pointer"
									>
										<div className="flex gap-3">
											<img
												src={product.image}
												alt={product.name}
												className="w-16 h-16 object-cover rounded-lg"
											/>
											<div className="flex-1">
												<h3 className="font-semibold text-basic-800 text-md">{product.name}</h3>
												<p className="text-basic-500 text-sm line-clamp-2 mt-1">
													{product.description}
												</p>
												<div className="flex justify-between items-center mt-2">
													<span className="text-basic-600 text-xs font-medium bg-basic-100 px-2 py-1 rounded">
														{product.category}
													</span>
													<span className="font-bold text-basic-800">
														R$ {product.price.toFixed(2).replace('.', ',')}
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center gap-2 py-8">
							<span className="text-basic-400 font-medium text-sm text-center">
								Nenhum produto encontrado para "{searchText}"
							</span>
							<span className="text-basic-300 font-medium text-xs text-center">
								Tente buscar por outro termo
							</span>
						</div>
					)}
				</div>
			) : (
				// Categories Section
				<div className="flex-1 px-4">
					<h2 className="text-md font-bold text-basic-800 mb-4 pt-2">Categorias</h2>

					<div className="flex flex-wrap gap-4">
						{categories.map((category: string, index: number) => (
							<button
								key={index}
								onClick={() => void navigate(`/category/${category}`)}
								className="bg-white rounded-full px-4 py-2 text-center border border-basic-200 hover:border-basic-300 transition-opacity duration-200 active:opacity-20 cursor-pointer"
							>
								<span className="text-basic-800 font-medium text-md">{category}</span>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

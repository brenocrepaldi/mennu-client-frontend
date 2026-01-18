import { NavigateFunction } from 'react-router-dom';
import { IProduct } from '../../../types/restaurant';

interface MenuListProps {
	category: string;
	productsOfSelectedCategory: IProduct[];
	navigate: NavigateFunction;
	categories: string[];
}

export function ProductList({
	category,
	productsOfSelectedCategory,
	navigate,
	categories,
}: MenuListProps) {
	return (
		<>
			<div id={category}>
				<div>
					{productsOfSelectedCategory.map((product) => (
						<div
							key={product.id}
							className="w-full max-h-48 flex gap-6 bg-secondary py-6 px-4 border-[0.7px] border-primary"
							onClick={() => void navigate(`/product/${String(product.id)}`)}
						>
							<div className="flex-1 flex flex-col gap-2">
								<span className="font-extrabold text-basic-800 line-clamp-1">{product.name}</span>
								<span className="text-sm font-[500] text-basic-400 line-clamp-3">
									{product.description}
								</span>
								<span className="text-zinc-700 font-semibold">
									R${product.price.toFixed(2).replace('.', ',')}
								</span>
							</div>
							<div className="h-full flex items-center justify-center">
								<img
									src={product.image}
									alt="Imagem do Produto"
									className="w-20 h-20 rounded-xl object-cover"
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Categories Section */}
			<div className="flex-1 px-4 bg-secondary pb-24 pt-8">
				<h2 className="text-md font-bold text-basic-800 mb-4 pt-2">Outras categorias</h2>

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
		</>
	);
}

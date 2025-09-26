import { NavigateFunction } from 'react-router-dom';
import { IProduct } from '../../../types';

interface MenuListProps {
	category: string;
	productsOfSelectedCategory: IProduct[];
	navigate: NavigateFunction;
}

export function ProductList({ category, productsOfSelectedCategory, navigate }: MenuListProps) {
	return (
		<div className="pb-24">
			<div id={category}>
				<div>
					{productsOfSelectedCategory.map((product) => (
						<div
							key={product.id}
							className="w-full max-h-48 flex gap-6 bg-secondary py-6 px-4 border-[0.7px] border-primary"
							onClick={() => navigate(`/product/${product.id}`)}
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
		</div>
	);
}

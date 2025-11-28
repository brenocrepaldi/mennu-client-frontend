interface CategoryListProps {
	categories: string[];
	selectedCategory: string;
	handleCategorySelect: (category: string) => void;
	capitalize: (text: string) => string;
}

export function CategoryList({
	categories,
	selectedCategory,
	handleCategorySelect,
	capitalize,
}: CategoryListProps) {
	return (
		<div className="category-list-container flex bg-primary gap-2 overflow-x-auto px-3 py-2 sticky top-0 scrollbar-hidden">
			{categories.map((category) => (
				<button
					key={category}
					id={`${category}-button`}
					className={`px-2 py-1.5 rounded-md text-sm font-semibold border-1 ${
						selectedCategory === category
							? 'bg-app border-app text-basic-50 ml-0'
							: 'text-app bg-app/10 border-app/50 m-auto'
					}`}
					onClick={() => handleCategorySelect(category)}
				>
					{capitalize(category)}
				</button>
			))}
		</div>
	);
}

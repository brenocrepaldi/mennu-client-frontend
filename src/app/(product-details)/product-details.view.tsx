import { Page } from '../../components/page-template';
import { UnavailableMessage } from '../../components/unavailble-message';
import { useProductDetailsModel } from './product-details.model';
import { ProductFooter } from './components/product-footer';
import { ProductInfo } from './components/product-info';
import { ObservationsField } from './components/product-observations';

type ProductDetailsViewProps = ReturnType<typeof useProductDetailsModel>;

export function ProductDetailsView(props: ProductDetailsViewProps) {
	const {
		MAX_OBSERVATION_LENGTH,
		MAX_PRODUCT_ORDER,
		isOpen,
		isEditMode,
		product,
		productCounter,
		descriptionRef,
		readMore,
		setReadMore,
		isOverflowing,
		observation,
		setObservation,
		handleAddItemToBag,
		handleUpdateItemInBag,
		prevCounter,
		handleCounterChange,
	} = props;

	// Show message if product is not found
	if (!product) {
		return <UnavailableMessage pageHeaderLabel="Product Details" pageHeaderReturnToPath="/menu" />;
	}

	return (
		<Page
			pageHeaderLabel={isEditMode ? 'Editar Produto' : 'Detalhes do Produto'}
		>
			{/* Product image */}
			<img className="w-full h-60 object-cover" src={product.image} alt="Product Image" />

			<div className="bg-secondary p-4 space-y-6 shadow-bottom">
				{/* Display product info (name, description, price) */}
				<ProductInfo
					name={product.name}
					description={product.description}
					price={product.price}
					isOverflowing={isOverflowing}
					readMore={readMore}
					setReadMore={setReadMore}
					descriptionRef={descriptionRef}
				/>
			</div>

			{/* Field for product observations (comments) */}
			<ObservationsField
				observation={observation}
				setObservation={setObservation}
				maxLength={MAX_OBSERVATION_LENGTH}
			/>

			{/* Product footer with order controls and info */}
			<ProductFooter
				isOpen={isOpen}
				product={product}
				productCounter={productCounter}
				maxProductOrder={MAX_PRODUCT_ORDER}
				isEditMode={isEditMode}
				handleCounterChange={handleCounterChange}
				prevCounter={prevCounter}
				handleUpdateItemInBag={handleUpdateItemInBag}
				handleAddItemToBag={handleAddItemToBag}
			/>
		</Page>
	);
}

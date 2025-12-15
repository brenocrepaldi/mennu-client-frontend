import { Page } from '../../components/page-template';
import { BagFooter } from './components/bag-footer';
import { EmptyBag } from './components/empty-bag';
import { useBagModel } from './bag.model';
import { ChoseProducts } from './components/steps/chose-products';
import { PageTransition } from '../../components/page-transition';
import { AnimatePresence } from 'framer-motion';
import { ConfirmAddress } from './components/steps/confirm-address';
import { Checkout } from './components/steps/checkout';

type BagViewProps = ReturnType<typeof useBagModel>;

export function BagView(props: BagViewProps) {
	const {
		navigate,
		restaurant,
		bag,
		totalPrice,
		totalItemsCount,
		getTotalItemsCount,
		addItemToBag,
		removeItemFromBag,
		deleteItemFromBag,
		clearBag,
		handleOnBack,
		currentStep,
		handleStepChange,
		addresses,
		selectedAddressId,
		setSelectedAddressId,
		handleConfirmOrder,
		showFooter,
		navDirection,
	} = props;

	if (!bag.length) return <EmptyBag />;

	return (
		<Page pageHeaderLabel="Sacola" bgSecondary={true} pageHeaderOnBack={handleOnBack}>
			<div className="px-3 pb-22 relative overflow-hidden">
				<AnimatePresence mode="wait" initial={false}>
					{currentStep === 'chose-products' ? (
						<PageTransition key="chose-products" direction={navDirection}>
							<ChoseProducts
								addItemToBag={addItemToBag}
								bag={bag}
								clearBag={clearBag}
								deleteItemFromBag={deleteItemFromBag}
								getTotalItemsCount={getTotalItemsCount}
								navigate={navigate}
								restaurant={restaurant}
								removeItemFromBag={removeItemFromBag}
								deliveryFee={restaurant.delivery.fee}
								totalPrice={totalPrice}
							/>
						</PageTransition>
					) : currentStep === 'confirm-address' ? (
						<PageTransition key="confirm-address" direction={navDirection}>
							<ConfirmAddress
								selectedAddressId={selectedAddressId}
								deliveryFee={restaurant.delivery.fee}
								onChangeAddress={setSelectedAddressId}
							/>
						</PageTransition>
					) : (
						<PageTransition key="checkout" direction={navDirection}>
							<Checkout
								bag={bag}
								selectedAddress={addresses.find((a) => a.id === selectedAddressId) || addresses[0]}
								totalPrice={totalPrice}
								deliveryFee={restaurant.delivery.fee || 0}
								onConfirmOrder={handleConfirmOrder}
							/>
						</PageTransition>
					)}
				</AnimatePresence>
			</div>

			{/* Footer - Only show on first two steps */}
			{showFooter && (
				<BagFooter
					totalItemsCount={totalItemsCount}
					totalPrice={totalPrice}
					deliveryFee={restaurant.delivery.fee || 0}
					currentStep={currentStep}
					handleStepChange={handleStepChange}
				/>
			)}
		</Page>
	);
}

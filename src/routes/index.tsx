import { AnimatePresence } from 'framer-motion';
import { JSX, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { BagStatus } from '../components/bag-status';
import { Navbar } from '../components/navbar';
import { PageTransition } from '../components/page-transition';

// Pages
import { BagPage } from '../app/(bag)/page';
import { CategoryPage } from '../app/(category)/page';
import { LoginPage } from '../app/(login)/page';
import { MenuPage } from '../app/(menu)/page';
import { NotFoundPage } from '../app/(not-found)/page';
import { OrdersPage } from '../app/(orders)/page';
import { ProductDetailsPage } from '../app/(product-details)/page';
import { ProfilePage } from '../app/(profile)/page';
import { RegisterPage } from '../app/(register)/page';
import { RestaurantDetailsPage } from '../app/(restaurant-details)/page';
import { SearchPage } from '../app/(search)/page';
import { SuccessPage } from '../app/(success)/page';

// Routes
const routes: Record<string, { component: JSX.Element; up?: boolean }> = {
	'*': { component: <NotFoundPage /> },
	'/': { component: <MenuPage /> },
	'/menu': { component: <MenuPage /> },
	'/product/:id': { component: <ProductDetailsPage /> },
	'/product/:id/edit': { component: <ProductDetailsPage /> },
	// '/calculate-delivery': { component: <DeliveryFeeCalculator />, up: true },
	'/restaurant/:id': { component: <RestaurantDetailsPage /> },
	'/search': { component: <SearchPage /> },
	'/category/:id': { component: <CategoryPage /> },
	'/bag': { component: <BagPage /> },
	'/orders': { component: <OrdersPage /> },
	'/profile': { component: <ProfilePage /> },
	'/login': { component: <LoginPage /> },
	'/login/success': { component: <SuccessPage /> },
	'/register': { component: <RegisterPage /> },
	'/register/success': { component: <SuccessPage /> },
};

export function AppRoutes() {
	const location = useLocation();
	const [showFooterComponents, setShowFooterComponents] = useState(true);

	useEffect(() => {
		const routesWithFooter = ['/', '/menu', '/search', '/orders', '/profile'];

		setShowFooterComponents(routesWithFooter.includes(location.pathname));
	}, [location]);

	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					{Object.entries(routes).map(([path, { component, up }]) => (
						<Route
							key={path}
							path={path}
							element={<PageTransition up={!!up}>{component}</PageTransition>}
						/>
					))}
				</Routes>
			</AnimatePresence>

			{showFooterComponents && <BagStatus />}
			{showFooterComponents && <Navbar />}
		</>
	);
}

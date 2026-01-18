import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import { App } from './app';

import './index.css';

const rootElement = document.getElementById('root');
if (rootElement)
	createRoot(rootElement).render(
		<StrictMode>
			<App />
			<Toaster richColors position="top-center" />
		</StrictMode>
	);

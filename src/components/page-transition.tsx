import { motion } from 'framer-motion';

interface PageTransitionProps {
	children: React.ReactNode;
	up?: boolean;
}

export function PageTransition({ children, up = false }: PageTransitionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: up ? -20 : 0 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: up ? 20 : 0 }}
			transition={{ duration: 0.2, ease: 'easeInOut' }}
		>
			{children}
		</motion.div>
	);
}

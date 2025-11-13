import { motion } from 'framer-motion';

interface PageTransitionProps {
	children: React.ReactNode;
	/** Direction of the slide: 'forward' = right to left, 'backward' = left to right */
	direction?: 'forward' | 'backward';
}

export function PageTransition({ children, direction }: PageTransitionProps) {
	const distance = 24;

	let initial = { opacity: 0, x: 0, y: 0 };
	let exit = { opacity: 0, x: 0, y: 0 };

	if (direction === 'forward') {
		initial = { opacity: 0, x: distance, y: 0 };
		exit = { opacity: 0, x: -distance, y: 0 };
	} else if (direction === 'backward') {
		initial = { opacity: 0, x: -distance, y: 0 };
		exit = { opacity: 0, x: distance, y: 0 };
	}

	const animate = { opacity: 1, x: 0, y: 0 };

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ duration: 0.2, ease: 'easeInOut' }}
			style={{ position: 'relative', width: '100%' }}
			layout
		>
			{children}
		</motion.div>
	);
}

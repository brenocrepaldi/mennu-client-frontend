import { ReactNode } from 'react';
import { PageHeader } from './page-header';
import { cn } from '../utils/cn';

interface PageProps {
	children: ReactNode;
	pageHeaderLabel?: string;
	pageHeaderReturnToPath?: string;
	bgSecondary?: boolean;
	className?: string;
}

export function Page({
	children,
	pageHeaderLabel,
	pageHeaderReturnToPath,
	bgSecondary = false,
	className,
}: PageProps) {
	return (
		<div
			className={cn(`min-h-dvh min-w-dvw`, bgSecondary ? 'bg-secondary' : 'bg-primary', className)}
		>
			{pageHeaderLabel && (
				<PageHeader label={pageHeaderLabel} returnToPath={pageHeaderReturnToPath} />
			)}

			{children}
		</div>
	);
}

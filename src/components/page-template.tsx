import { ReactNode } from 'react';
import { PageHeader } from './page-header';

interface PageProps {
	children: ReactNode;
	pageHeaderLabel?: string;
	pageHeaderReturnToPath?: string;
	bgSecondary?: boolean;
}

export function Page({
	children,
	pageHeaderLabel,
	pageHeaderReturnToPath,
	bgSecondary = false,
}: PageProps) {
	return (
		<div
			className={`min-h-dvh min-w-dvw ${
				bgSecondary ? 'bg-secondary' : 'bg-primary'
			}`}
		>
			{pageHeaderLabel && (
				<PageHeader
					label={pageHeaderLabel}
					returnToPath={pageHeaderReturnToPath}
				/>
			)}

			{children}
		</div>
	);
}

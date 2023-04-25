'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ChildProps {
	children: ReactNode;
}

export function Providers({ children }: ChildProps) {
	return (
		<ThemeProvider enableSystem={false} attribute='class'>
			{children}
		</ThemeProvider>
	);
}

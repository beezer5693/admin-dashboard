import './globals.css';
import { Roboto } from 'next/font/google';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import { ReactNode } from 'react';
import { Providers } from './providers';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
});
interface ChildProps {
	children: ReactNode;
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' className={roboto.className} suppressHydrationWarning>
			<body className='flex min-h-screen overflow-auto bg-gray-200/40 pl-72 dark:bg-zinc-900'>
				<Providers>
					<Sidebar />
					<Navbar />
					<div className='mb-20 w-full'>{children}</div>
				</Providers>
			</body>
		</html>
	);
}

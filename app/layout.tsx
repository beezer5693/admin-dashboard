import './globals.css';
import { Roboto } from 'next/font/google';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
	title: 'Admin App',
	description: 'Admin Dashboard'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={roboto.className}>
			<body className='flex min-h-screen bg-gray-200/40 pl-72'>
				<Sidebar />
				<Navbar />
				<div className='w-full'>
					{children}
					<div className='h-20'></div>
				</div>
			</body>
		</html>
	);
}

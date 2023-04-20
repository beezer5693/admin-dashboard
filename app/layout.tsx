import './globals.css';
import { Nunito } from 'next/font/google';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

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
		<html lang='en' className={nunito.className}>
			<body className='flex bg-indigo-100/30'>
				<Sidebar />
				<div className='w-full'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}

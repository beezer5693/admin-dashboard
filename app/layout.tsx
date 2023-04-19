import './globals.css';
import { Nunito } from 'next/font/google';

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
			<body>{children}</body>
		</html>
	);
}

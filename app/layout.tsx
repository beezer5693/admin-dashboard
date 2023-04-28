'use client'

import './globals.css'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './providers'
import { AuthProvider, initialState } from './context/AuthContext'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})
interface ChildProps {
	children: ReactNode
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html
			lang='en'
			className={`${roboto.className} bg-gray-300/20`}
			suppressHydrationWarning
		>
			<body className='flex min-h-screen min-w-[600px] flex-col items-center bg-gray-300/20 pt-28 dark:dark:bg-zinc-900'>
				<Providers>
					<div className='flex w-full justify-center px-7'>
						<AuthProvider
							user={initialState.user}
							isLoggedIn={initialState.isLoggedIn}
						>
							{children}
						</AuthProvider>
					</div>
				</Providers>
			</body>
		</html>
	)
}

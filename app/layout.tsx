import './globals.css'
import { Roboto } from 'next/font/google'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import { ReactNode } from 'react'
import { Providers } from './providers'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
interface ChildProps {
  children: ReactNode
}

export default function RootLayout({ children }: ChildProps) {
  return (
    <html
      lang='en'
      className={`bg-white ${roboto.className}`}
      suppressHydrationWarning
    >
      <body className='ml-72 flex min-h-screen min-w-[600px] flex-col items-center bg-gray-300/40 pt-28 dark:bg-zinc-900'>
        <Providers>
          <Sidebar />
          <Navbar />
          <div className='flex w-full justify-center px-7'>{children}</div>
        </Providers>
      </body>
    </html>
  )
}

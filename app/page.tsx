'use client'

import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Widget from './components/widget/Widget'
import Chart from './components/chart/Chart'
import Featured from './components/featured/Featured'
import Table from './components/table/Table'
import { useContext, useEffect } from 'react'
import { AuthContext } from './context/AuthContext'
import { useRouter } from 'next/navigation'

export default function Home() {
	const {
		state: { user },
		state: { isLoggedIn },
	} = useContext(AuthContext)

	const router = useRouter()

	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/login')
		}
	}, [isLoggedIn])

	return (
		<div className='pl-72'>
			<Sidebar />
			<Navbar />
			<div className='flex min-w-[500px] flex-col items-center justify-center'>
				<div className='grid w-full min-w-max grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4'>
					<Widget type='user' />
					<Widget type='order' />
					<Widget type='earning' />
					<Widget type='balance' />
				</div>
				<div className='mt-8 grid w-full grid-cols-1 gap-4 xl:grid-cols-5'>
					<Featured />
					<Chart />
				</div>
				<div className='mt-8 grid w-full grid-cols-1'>
					<Table />
				</div>
			</div>
		</div>
	)
}

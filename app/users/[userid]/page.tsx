'use client'

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import checkAuthStatus from '@/lib/checkAuthStatus'
import UserChart from '@/app/components/chart/UserChart'
import UserTransactions from '@/app/components/table/UserTable'

export default function User() {
	const {
		state: { user },
	} = useContext(AuthContext)

	const router = useRouter()

	useEffect(() => {
		!checkAuthStatus(user) && router.push('/login')
	}, [user])

	return (
		<div className='w-full'>
			<div className='grid min-w-[500px] grid-cols-1 gap-7'>
				<div className='grid min-h-[350px] grid-cols-1 gap-5 xl:grid-cols-3'>
					<div className='relative col-span-3 flex flex-col items-center justify-center rounded-2xl bg-white pt-4 dark:bg-zinc-950/60 xl:col-span-1'>
						<div className='absolute right-3 top-3 cursor-pointer rounded-lg bg-gray-300/30 px-2 py-1 text-sm text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'>
							Edit
						</div>
						<h1 className='absolute left-4 top-4 text-xl text-gray-800 dark:text-gray-200'>Profile</h1>
						<div className='mb-3 flex h-28 w-28 items-center justify-center rounded-full border border-gray-500 bg-gray-300/30 text-4xl text-black'>
							{user?.firstName[0]}
							{user?.lastName[0]}
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='text-2xl text-black dark:text-gray-200'>
								{user?.firstName} {user?.lastName}
							</h1>
							<div className='flex items-center space-x-3'>
								<span className='text-sm text-gray-500 dark:text-gray-400'>Email:</span>
								<span className='text-sm font-light text-gray-500 dark:text-gray-400'>{user?.email}</span>
							</div>
						</div>
					</div>
					<UserChart />
				</div>
				<div>
					<UserTransactions />
				</div>
			</div>
		</div>
	)
}

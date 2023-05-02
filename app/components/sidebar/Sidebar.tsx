'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
	MdPayment,
	MdOutlineDeliveryDining,
	MdStorefront,
	MdOutlineHealthAndSafety,
	MdPersonOutline,
	MdLogout,
	MdOutlineAnalytics,
} from 'react-icons/md'
import { HiOutlineUsers } from 'react-icons/hi'
import { TbReport, TbNotification, TbLayoutDashboard } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'
import Image from 'next/image'
import Logo from '../../assets/images/admin.png'

const Sidebar = () => {
	const {
		state: { user },
		dispatch,
	} = useContext(AuthContext)

	return (
		<div className='fixed bottom-0 left-0 top-0 z-20 flex min-h-screen w-72 flex-col justify-between overflow-auto bg-black'>
			<div>
				<Link href='/'>
					<div className='mb-10 mt-5 flex w-full items-center space-x-3 px-5'>
						<Image src={Logo} alt='logo' width={30} height={30} />
						<span className='text-xl font-bold text-gray-100'>Admin.ly</span>
					</div>
				</Link>
				<div>
					<ul className='sidebar-nav flex flex-col items-center justify-center space-y-5'>
						<div>
							<h3>Menu</h3>
							<Link href='/'>
								<li>
									<TbLayoutDashboard className='icon icon-stroke' />
									<span>Dashboard</span>
								</li>
							</Link>
							<li>
								<MdOutlineAnalytics className='icon icon-fill' />
								<span>Stats</span>
							</li>
							<li>
								<MdPayment className='icon icon-fill' />
								<span>Orders</span>
							</li>
						</div>
						<div>
							<h3>Management</h3>
							<Link href='/users'>
								<li>
									<HiOutlineUsers className='icon icon-stroke' />
									<span>Users</span>
								</li>
							</Link>
							<Link href='/products'>
								<li>
									<MdStorefront className='icon icon-fill' />
									<span>Products</span>
								</li>
							</Link>
							<li>
								<MdOutlineDeliveryDining className='icon icon-fill' />
								<span>Delivery</span>
							</li>
							<li>
								<TbReport className='icon icon-stroke' />
								<span>Logs</span>
							</li>
						</div>
						<div>
							<h3>Service</h3>
							<li>
								<MdOutlineHealthAndSafety className='icon icon-fill' />
								<span>System Health</span>
							</li>
						</div>
						<div>
							<h3>User</h3>
							<Link href={`/users/${user?.id}`}>
								<li>
									<MdPersonOutline className='icon icon-fill' />
									<span>Profile</span>
								</li>
							</Link>
							<li>
								<FiSettings className='icon icon-stroke' />
								<span>Settings</span>
							</li>
							<li>
								<TbNotification className='icon icon-stroke' />
								<span>Notifications</span>
							</li>
						</div>
					</ul>
				</div>
			</div>
			<div className='mb-20 mt-10 flex w-full flex-col items-center'>
				<div className='mb-6 flex items-center gap-4'>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-black'>
						{user?.firstName[0]}
						{user?.lastName[0]}
					</div>
					<div className='flex flex-col'>
						<span className='font-light text-gray-100'>
							{user?.firstName} {user?.lastName}
						</span>
						<span className='text-sm font-light text-gray-500'>Software Developer</span>
					</div>
				</div>
				<div className='w-full px-4'>
					<div
						onClick={() => dispatch({ type: 'LOGOUT' })}
						className='group mb-1 flex cursor-pointer items-center space-x-3 rounded-xl bg-gray-400/20 py-4 pl-4 transition duration-300 ease-in-out'
					>
						<MdLogout className='icon icon-fill group-hover:fill-gray-300' />
						<span className='text-sm font-normal text-gray-500 group-hover:text-gray-300'>Logout</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Sidebar

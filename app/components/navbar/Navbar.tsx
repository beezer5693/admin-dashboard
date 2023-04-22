'use client';

import {
	BsChatLeftDots,
	BsFullscreenExit,
	BsMoon,
	BsListTask,
	BsSearch
} from 'react-icons/bs';
import { SlBell } from 'react-icons/sl';
import { Tooltip } from '@mui/material';

const Navbar = () => {
	return (
		<div className='fixed bottom-0 left-60 right-0 top-0 z-10 box-border flex h-20 max-w-full items-center justify-between bg-white px-20 shadow-lg shadow-gray-200/20'>
			<div className='relative basis-2/4'>
				<input
					className='focus:border-1 w-full rounded-full bg-gray-300/30 py-3 pl-5 text-gray-700 outline-none transition duration-300 ease-in-out placeholder:font-normal placeholder:text-gray-400 hover:bg-gray-300/40 focus:border focus:border-gray-400'
					type='text'
					placeholder='Search'
				/>
				<BsSearch className='absolute right-5 top-1/2 -translate-y-1/2' />
			</div>
			<div className='flex max-w-fit items-center justify-around gap-6'>
				<Tooltip title='Change Theme'>
					<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-200/40'>
						<BsMoon className='h-6 w-6 fill-gray-400 transition duration-300 ease-in-out group-hover:fill-black' />
					</div>
				</Tooltip>
				<Tooltip title='Fullscreen'>
					<div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-gray-200/40'>
						<BsFullscreenExit className='h-6 w-6 fill-gray-400 transition duration-300 ease-in-out group-hover:fill-black' />
					</div>
				</Tooltip>
				<Tooltip title='Notifications'>
					<div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-gray-200/40'>
						<div className='relative'>
							<span className='ping absolute right-0.5 top-px h-2 w-2 rounded-full bg-black'></span>
							<span className='absolute right-0.5 top-px h-2 w-2 rounded-full bg-black'></span>
							<SlBell className='h-6 w-6 fill-gray-400 transition duration-300 ease-in-out group-hover:fill-black' />
						</div>
					</div>
				</Tooltip>
				<Tooltip title='Chats'>
					<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-200/40'>
						<div className='relative'>
							<span className='ping absolute -right-1 -top-px h-2 w-2 rounded-full bg-black'></span>
							<span className='absolute -right-1 -top-px h-2 w-2 rounded-full bg-black'></span>
							<BsChatLeftDots className='h-6 w-6 fill-gray-400 transition duration-300 ease-in-out group-hover:fill-black' />
						</div>
					</div>
				</Tooltip>
				<Tooltip title='Lists'>
					<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-200/40'>
						<BsListTask className='h-6 w-6 fill-gray-400 transition duration-300 ease-in-out group-hover:fill-black' />
					</div>
				</Tooltip>
				<div className='cursor-pointer'>
					<img
						className='h-10 w-10 rounded-full object-cover object-top'
						src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
						alt='profile'
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbar;

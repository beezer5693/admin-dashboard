'use client';

import { useTheme } from 'next-themes';
import {
	BsChatLeftDots,
	BsMoon,
	BsSearch,
	BsCalendar3,
	BsSun
} from 'react-icons/bs';
import { SlBell } from 'react-icons/sl';
import { Tooltip } from '@mui/material';

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	const date = new Date().toLocaleDateString('en-us', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});

	return (
		<div className='fixed min-w-[600px] bottom-0 left-72 right-0 top-0 z-10 box-border flex h-20 max-w-full items-center justify-between bg-white px-10 shadow-md shadow-gray-300/20 dark:bg-black dark:shadow-none gap-3'>
			<div className='relative basis-2/5'>
				<input
					className='focus:border-1 w-full rounded-xl bg-gray-300/30 py-3 pl-5 text-gray-700 outline-none transition duration-300 ease-in-out placeholder:font-normal placeholder:text-gray-400 hover:bg-gray-300/40 focus:border-2 focus:border-blue-600 dark:text-gray-300  dark:hover:bg-gray-300/30 dark:focus:border-blue-600'
					type='text'
					placeholder='Search'
				/>
				<BsSearch className='absolute right-5 top-1/2 -translate-y-1/2 dark:fill-gray-400' />
			</div>
			<div className='flex max-w-fit items-center gap-6'>
				{theme === 'dark' ? (
					<Tooltip title='Light Theme'>
						<div
							onClick={() => setTheme('light')}
							className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out dark:hover:bg-gray-400/30'
						>
							<BsSun className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out dark:group-hover:fill-gray-300' />
						</div>
					</Tooltip>
				) : (
					<Tooltip title='Dark Theme'>
						<div
							onClick={() => setTheme('dark')}
							className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-300/30'
						>
							<BsMoon className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600' />
						</div>
					</Tooltip>
				)}
				<Tooltip title='Notifications'>
					<div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-gray-300/30 dark:hover:bg-gray-400/30'>
						<div className='relative'>
							<span className='ping absolute right-0.5 top-px h-2 w-2 rounded-full bg-red-500'></span>
							<span className='absolute right-0.5 top-px h-2 w-2 rounded-full bg-red-500'></span>
							<SlBell className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600 dark:group-hover:fill-gray-300' />
						</div>
					</div>
				</Tooltip>
				<Tooltip title='Chats'>
					<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-gray-300/30 dark:hover:bg-gray-400/30'>
						<div className='relative'>
							<span className='ping absolute -right-1 -top-px h-2 w-2 rounded-full bg-red-500'></span>
							<span className='absolute -right-1 -top-px h-2 w-2 rounded-full bg-red-500'></span>
							<BsChatLeftDots className='h-6 w-6 fill-gray-500 transition duration-300 ease-in-out group-hover:fill-blue-600 dark:group-hover:fill-gray-300' />
						</div>
					</div>
				</Tooltip>
				<div className='mr-1 h-10 w-px border-r dark:border-gray-500'></div>
				<div className='flex items-center gap-3'>
					<BsCalendar3 className='h-5 w-5 fill-gray-500/80' />
					<span className='text-gray-500/80 text-sm xl:text-base dark:text-gray-400/80 break-words'>{date}</span>
				</div>
			</div>
		</div>
	);
};
export default Navbar;

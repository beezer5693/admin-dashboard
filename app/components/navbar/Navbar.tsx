import {
	BsChatLeftDots,
	BsFullscreenExit,
	BsMoon,
	BsListTask
} from 'react-icons/bs';
import { SlBell } from 'react-icons/sl';

const Navbar = () => {
	return (
		<div className='flex h-20 w-full items-center justify-center bg-white px-10 shadow-sm shadow-indigo-200/30'>
			<input
				className='w-2/3 rounded-lg border p-3 text-slate-700 outline-none transition duration-300 ease-in-out focus:border-2 focus:border-indigo-600'
				type='search'
				placeholder='Search'
			/>
			<div className='ml-12 flex w-1/3 items-center justify-between'>
				<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-indigo-100/40'>
					<BsMoon className='h-6 w-6 fill-slate-500 transition duration-300 ease-in-out group-hover:fill-indigo-600' />
				</div>
				<div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-indigo-100/40'>
					<BsFullscreenExit className='h-6 w-6 fill-slate-500 transition duration-300 ease-in-out group-hover:fill-indigo-600' />
				</div>
				<div className='group cursor-pointer rounded-full  p-2.5 transition duration-300 ease-in-out hover:bg-indigo-100/40'>
					<div className='relative'>
						<span className='ping absolute right-0.5 top-px h-2 w-2 rounded-full bg-indigo-600'></span>
						<span className='absolute right-0.5 top-px h-2 w-2 rounded-full bg-indigo-600'></span>
						<SlBell className='h-6 w-6 fill-slate-500 transition duration-300 ease-in-out group-hover:fill-indigo-600' />
					</div>
				</div>
				<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-indigo-100/40'>
					<div className='relative'>
						<span className='ping absolute -right-1 -top-px h-2 w-2 rounded-full bg-indigo-600'></span>
						<span className='absolute -right-1 -top-px h-2 w-2 rounded-full bg-indigo-600'></span>
						<BsChatLeftDots className='h-6 w-6 fill-slate-500 transition duration-300 ease-in-out group-hover:fill-indigo-600' />
					</div>
				</div>
				<div className='group cursor-pointer rounded-full  p-3 transition duration-300 ease-in-out hover:bg-indigo-100/40'>
					<BsListTask className='h-6 w-6 fill-slate-500 transition duration-300 ease-in-out group-hover:fill-indigo-600' />
				</div>
				<div className='cursor-pointer'>
					<img
						className='h-8 w-8 rounded-full object-cover object-top'
						src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
						alt='profile'
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbar;

'use client';

import { BsThreeDots } from 'react-icons/bs';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { MdKeyboardArrowUp } from 'react-icons/md';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
	return (
		<div className='col-span-2 rounded-lg bg-white px-3 pt-3 shadow-2xl shadow-indigo-400/20'>
			<div className='flex items-center justify-between'>
				<h1 className='text-xl text-slate-400'>Total Revenue</h1>
				<BsThreeDots className='h-5 w-5 cursor-pointer fill-slate-400 transition duration-300 ease-in-out hover:fill-slate-900' />
			</div>
			<div className='flex flex-col items-center justify-center space-y-5'>
				<div className='mt-8 h-48 w-48'>
					<CircularProgressbar
						value={66}
						text='66%'
						strokeWidth={5}
						styles={buildStyles({
							pathColor: '#4f46e5',
							textColor: '#4f46e5'
						})}
					/>
				</div>
				<div className='mx-w-content flex flex-col items-center justify-center space-y-4 px-12'>
					<p className='font-medium text-slate-400'>Total Sales Today</p>
					<p className='text-3xl'>$420</p>
					<p className='px-8 text-center text-sm font-light text-slate-400'>
						Previous transactions processing. Last payments may not be included.
					</p>
				</div>
				<div className='flex w-full items-center justify-between px-6 pb-6'>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-slate-400'>Target</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp />
							<span>$12.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-slate-400'>Last 7 Days</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp />
							<span>$12.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-slate-400'>Last 30 Days</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp />
							<span>$12.4k</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Featured;

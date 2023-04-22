'use client';

import { BsThreeDots } from 'react-icons/bs';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { MdKeyboardArrowUp } from 'react-icons/md';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
	return (
		<div className='col-span-2 rounded-lg bg-black px-6 py-4 shadow-2xl shadow-gray-800/50'>
			<div className='flex items-center justify-between'>
				<h1 className='text-xl text-gray-200'>Total Revenue</h1>
				<BsThreeDots className='h-5 w-5 cursor-pointer fill-gray-400 transition duration-300 ease-in-out hover:fill-gray-200' />
			</div>
			<div className='flex flex-col items-center justify-center space-y-5'>
				<div className='mt-8 h-48 w-48'>
					<CircularProgressbar
						value={66}
						text='66%'
						strokeWidth={5}
						styles={buildStyles({
							pathColor: '#22c55e',
							textColor: '#22c55e'
						})}
					/>
				</div>
				<div className='mx-w-content flex flex-col items-center justify-center space-y-4 px-12'>
					<p className='font-medium text-gray-200'>Total Sales Today</p>
					<p className='text-3xl text-green-500'>$420</p>
					<p className='px-8 text-center text-sm font-light text-gray-200'>
						Previous transactions processing. Last payments may not be included.
					</p>
				</div>
				<div className='flex w-full items-center justify-between px-6'>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-gray-200'>Target</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp className='fill-gray-200' />
							<span className='text-gray-300'>$12.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-gray-200'>Last 7 Days</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp className='fill-gray-200' />
							<span className='text-gray-300'>$12.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-1'>
						<span className='text-gray-200'>Last 30 Days</span>
						<div className='flex items-center justify-center gap-1'>
							<MdKeyboardArrowUp className='fill-gray-200' />
							<span className='text-gray-300'>$12.4k</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Featured;

import {
	MdPersonOutline,
	MdKeyboardArrowUp,
	MdOutlineAttachMoney
} from 'react-icons/md';
import { BsCart2, BsWallet2 } from 'react-icons/bs';

interface TypeProps {
	type: 'user' | 'order' | 'earning' | 'balance';
}

const Widget = ({ type }: TypeProps) => {
	let data;

	// Temporary data
	const amount = 100;
	const percentage = 20;

	switch (type) {
		case 'user':
			data = {
				title: 'Users',
				isMoney: false,
				link: 'See all users',
				icon: (
					<div className='rounded-md bg-blue-300/30 p-1'>
						<MdPersonOutline className='h-5 w-5 fill-blue-600' />
					</div>
				)
			};
			break;
		case 'order':
			data = {
				title: 'Orders',
				isMoney: false,
				link: 'See all orders',
				icon: (
					<div className='rounded-md bg-blue-300/30 p-1'>
						<BsCart2 className='h-5 w-5 fill-blue-600' />
					</div>
				)
			};
			break;
		case 'earning':
			data = {
				title: 'Earnings',
				isMoney: true,
				link: 'View earnings',
				icon: (
					<div className='rounded-md bg-blue-300/30 p-1'>
						<MdOutlineAttachMoney className='h-5 w-5 fill-blue-600' />
					</div>
				)
			};
			break;
		case 'balance':
			data = {
				title: 'Balance',
				isMoney: true,
				link: 'View balance',
				icon: (
					<div className='rounded-md bg-blue-300/30 p-1'>
						<BsWallet2 className='h-5 w-5 fill-blue-600' />
					</div>
				)
			};
			break;
		default:
			break;
	}
	return (
		<div className='display flex justify-between rounded-lg bg-white p-3'>
			<div className='flex flex-col justify-between space-y-3'>
				<span className='font-normal text-gray-500'>{data?.title}</span>
				<span className='text-2xl font-light'>
					{data?.isMoney && '$'} {amount}{' '}
				</span>
				<span className='cursor-pointer text-sm hover:underline'>
					{data?.link}
				</span>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<span className='flex items-center'>
					<MdKeyboardArrowUp />
					{percentage}%
				</span>
				{data?.icon}
			</div>
		</div>
	);
};
export default Widget;

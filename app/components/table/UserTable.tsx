'use client';

const UserTransactions = () => {
	const rows = [
		{
			id: 1143155,
			product: 'Acer Nitro 5',
			img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'John Smith',
			date: '1 March',
			amount: 785,
			method: 'Cash on Delivery',
			status: 'Approved'
		},
		{
			id: 2235235,
			product: 'Playstation 5',
			img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Michael Doe',
			date: '1 March',
			amount: 900,
			method: 'Online Payment',
			status: 'Pending'
		},
		{
			id: 2342353,
			product: 'Redragon S101',
			img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'John Smith',
			date: '1 March',
			amount: 35,
			method: 'Cash on Delivery',
			status: 'Pending'
		},
		{
			id: 2357741,
			product: 'Razer Blade 15',
			img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Jane Smith',
			date: '1 March',
			amount: 920,
			method: 'Online',
			status: 'Approved'
		},
		{
			id: 2342355,
			product: 'ASUS ROG Strix',
			img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
			customer: 'Harold Carol',
			date: '1 March',
			amount: 2000,
			method: 'Online',
			status: 'Pending'
		}
	];
	return (
		<div className='mx-h-screen rounded-xl bg-white px-6 pb-4 pt-2 dark:bg-zinc-950'>
			<div className='flex items-center py-3 dark:text-gray-200'>
				Latest Transactions
			</div>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'></th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Tracking ID
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Product
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Customer
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Date
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Amount
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Payment Method
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, i) => (
							<tr key={row.id}>
								<th className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{i + 1}
								</th>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{row.id}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									<div className='flex items-center gap-3'>
										<img
											className='h-8 w-8 object-contain'
											src={row.img}
											alt=''
										/>
										{row.product}
									</div>
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{row.customer}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{row.date}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{row.amount}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{row.method}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									<span
										className={`rounded-lg px-2 py-1.5 ${
											row.status === 'Approved'
												? 'bg-blue-400/20 text-blue-500'
												: 'bg-cyan-400/20 text-cyan-500'
										}`}
									>
										{row.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default UserTransactions;

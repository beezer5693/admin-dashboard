'use client';
import { rows } from '../../data/dataTableSource';
import Link from 'next/link';
import { useState } from 'react';

interface RowProps {
	id: number;
	username: string;
	img: string;
	status: string;
	email: string;
	age: number;
}

export default function DataTable() {
	const [users, setUsers] = useState<RowProps[]>(rows);

	const handleDelete = (id: number) => {
		setUsers(users.filter(user => user.id !== id));
	};

	return (
		<div className='rounded-2xl bg-white p-5 dark:bg-zinc-950'>
			<div className='mb-5 flex w-full items-center justify-between'>
				<span className='text-2xl text-gray-800 dark:text-gray-200'>Users</span>
				<Link href='/users/register'>
					<span className='cursor-pointer rounded-lg px-3 py-2 text-gray-500/60 transition hover:bg-gray-200/40 hover:text-black dark:text-gray-500 dark:hover:bg-gray-400/30 dark:hover:text-gray-200'>
						Add User
					</span>
				</Link>
			</div>
			<div className='max-h-[60vh] w-full  overflow-x-auto rounded-xl'>
				<table className='table h-full w-full'>
					<thead>
						<tr>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900'>
								<label>
									<input
										type='checkbox'
										className='checkbox-primary checkbox border-gray-200 dark:border-gray-500'
									/>
								</label>
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								id
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								User
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								Email
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								Age
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								Status
							</th>
							<th className='bg-blue-600 text-gray-200 dark:bg-zinc-900 dark:text-gray-200'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, i) => (
							<tr key={user.id}>
								<th className='border-none bg-blue-200/10 dark:bg-zinc-800'>
									<label>
										<input
											type='checkbox'
											className='checkbox-primary checkbox border-gray-600 bg-blue-200/10 dark:border-gray-500'
										/>
									</label>
								</th>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{i + 1}
								</td>
								<td className=' flex items-center gap-2 border-none bg-blue-200/10 dark:bg-zinc-800 '>
									<img
										className='h-9 w-9 rounded-full'
										src={user.img}
										alt='avatar'
									/>
									<span className='dark:text-gray-200'>{user.username}</span>
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{user.email}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800 dark:text-gray-200'>
									{user.age}
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800'>
									<span
										className={`rounded-lg px-2 py-1.5 ${
											user.status === 'active'
												? 'bg-blue-400/20 text-blue-500'
												: user.status === 'pending'
												? 'bg-cyan-400/20 text-cyan-500'
												: 'bg-red-400/20 text-red-500'
										}`}
									>
										{user.status}
									</span>
								</td>
								<td className='border-none bg-blue-200/10 dark:bg-zinc-800'>
									<div className='flex items-center gap-3'>
										<Link href='/users/1'>
											<span className='cursor-pointer rounded-lg px-2 py-1 text-gray-500 transition hover:bg-gray-400/20 hover:text-gray-800 dark:hover:bg-gray-500/20 dark:hover:text-gray-200'>
												View
											</span>
										</Link>
										<span
											onClick={() => handleDelete(user.id)}
											className='cursor-pointer text-gray-500/80 transition hover:text-red-600'
										>
											Delete
										</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

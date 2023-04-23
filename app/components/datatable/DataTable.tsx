'use client';

import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '@/app/data/dataTableSource';

const DataTable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 230,
			renderCell: () => (
				<div className='flex items-center gap-3'>
					<Link href='/users/1'>
						<div className='cursor-pointer rounded-lg p-1.5 text-gray-600/40 hover:bg-gray-300/30 hover:text-black'>
							View
						</div>
					</Link>
					<div className='cursor-pointer rounded-lg p-1.5 text-gray-500/40 hover:text-gray-600'>
						Remove
					</div>
				</div>
			)
		}
	];

	return (
		<div className='mt-40 rounded-lg bg-white p-5'>
			<div className='mb-5 flex w-full items-center justify-between'>
				<span className='text-2xl text-gray-800'>Users</span>
				<Link href='/users/register'>
					<span className='cursor-pointer rounded-lg px-2 py-1.5 text-gray-500/60 transition hover:bg-gray-200/40 hover:text-black'>
						Add User
					</span>
				</Link>
			</div>
			<DataGrid
				style={{ border: 'none' }}
				rows={rows}
				columns={columns.concat(actionColumn)}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10
						}
					}
				}}
				pageSizeOptions={[5, 15, 25]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default DataTable;

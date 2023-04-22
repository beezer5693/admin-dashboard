'use client';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { columns, rows } from '@/app/data/dataTableSource';

const DataTable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 230,
			renderCell: () => (
				<div className='flex items-center gap-3'>
					<div className='cursor-pointer rounded-lg p-1.5 text-gray-600/40 hover:bg-gray-300/30 hover:text-black'>
						View
					</div>
					<div className='cursor-pointer rounded-lg p-1.5 text-gray-500/40 hover:text-gray-400'>
						Delete
					</div>
				</div>
			)
		}
	];

	return (
		<div className='mt-40 rounded-lg bg-white px-3 py-3 shadow-2xl shadow-gray-500/20'>
			<span>Users</span>
			<DataGrid
				style={{ border: 'none' }}
				rows={rows}
				columns={columns.concat(actionColumn)}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5
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

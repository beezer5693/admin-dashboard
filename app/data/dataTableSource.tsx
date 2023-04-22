import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 130 },
	{
		field: 'username',
		headerName: 'Username',
		width: 230,
		renderCell: params => (
			<div className='flex items-center gap-3'>
				<img
					className='h-8 w-8 rounded-full'
					src={params.row.img}
					alt='profile'
				/>
				{params.row.username}
			</div>
		)
	},
	{ field: 'email', headerName: 'Email', width: 230 },
	{ field: 'age', headerName: 'Age', width: 230 },
	{
		field: 'status',
		headerName: 'Status',
		width: 230,
		renderCell: params => (
			<div
				className={`rounded-full px-2.5 py-1 ${
					params.row.status === 'active'
						? 'bg-green-300/30 text-green-700'
						: params.row.status === 'pending'
						? 'bg-yellow-300/30 text-yellow-700'
						: 'bg-red-300/30 text-red-700'
				}`}
			>
				{params.row.status}
			</div>
		)
	}
];

export const rows = [
	{
		id: 1,
		username: 'Snow',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		status: 'active',
		email: '1snow@gmail.com',
		age: 35
	},
	{
		id: 2,
		username: 'Jamie Lannister',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '2snow@gmail.com',
		status: 'passive',
		age: 42
	},
	{
		id: 3,
		username: 'Lannister',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '3snow@gmail.com',
		status: 'pending',
		age: 45
	},
	{
		id: 4,
		username: 'Stark',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '4snow@gmail.com',
		status: 'active',
		age: 16
	},
	{
		id: 5,
		username: 'Targaryen',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '5snow@gmail.com',
		status: 'passive',
		age: 22
	},
	{
		id: 6,
		username: 'Melisandre',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '6snow@gmail.com',
		status: 'active',
		age: 15
	},
	{
		id: 7,
		username: 'Clifford',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '7snow@gmail.com',
		status: 'passive',
		age: 44
	},
	{
		id: 8,
		username: 'Frances',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: '8snow@gmail.com',
		status: 'active',
		age: 36
	},
	{
		id: 9,
		username: 'Roxie',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: 'snow@gmail.com',
		status: 'pending',
		age: 65
	},
	{
		id: 10,
		username: 'Roxie',
		img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		email: 'snow@gmail.com',
		status: 'active',
		age: 65
	}
];

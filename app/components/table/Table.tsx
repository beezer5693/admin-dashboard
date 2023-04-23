'use client';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#000000',
		color: theme.palette.common.white
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		border: 'none'
	}
}));

const List = () => {
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
		<div className='mx-h-screen rounded-lg bg-white px-6 pb-4 pt-2'>
			<div className='flex items-center py-3'>Latest Transactions</div>
			<TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead className='bg-black'>
						<TableRow>
							<TableCell></TableCell>
							<TableCell className='text-gray-200'>Tracking ID</TableCell>
							<TableCell className='text-gray-200'>Product</TableCell>
							<TableCell className='text-gray-200'>Customer</TableCell>
							<TableCell className='text-gray-200'>Date</TableCell>
							<TableCell className='text-gray-200'>Amount</TableCell>
							<TableCell className='text-gray-200'>Payment Method</TableCell>
							<TableCell className='text-gray-200'>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, i) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<StyledTableCell>{i + 1}</StyledTableCell>
								<StyledTableCell>{row.id}</StyledTableCell>
								<StyledTableCell>
									<div className='flex items-center gap-3'>
										<img src={row.img} alt='' className='h-7 w-7' />
										{row.product}
									</div>
								</StyledTableCell>
								<StyledTableCell>{row.customer}</StyledTableCell>
								<StyledTableCell>{row.date}</StyledTableCell>
								<StyledTableCell>{row.amount}</StyledTableCell>
								<StyledTableCell>{row.method}</StyledTableCell>
								<StyledTableCell>
									<span
										className={`rounded-lg px-2.5 py-1.5 ${
											row.status === 'Approved'
												? 'bg-green-400/20 text-green-700'
												: 'bg-yellow-400/20 text-yellow-600'
										}`}
									>
										{row.status}
									</span>
								</StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
export default List;

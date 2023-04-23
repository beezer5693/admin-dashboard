'use client';

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'January', Total: 1200 },
	{ name: 'February', Total: 2100 },
	{ name: 'March', Total: 800 },
	{ name: 'April', Total: 1600 },
	{ name: 'May', Total: 900 },
	{ name: 'June', Total: 1700 }
];

const UserChart = () => {
	return (
		<>
			<span className='text-xl text-gray-500'>
				User Transactions (Last 6 Months)
			</span>
			<div className='flex items-center justify-center'>
				<ResponsiveContainer width='100%' height='100%' aspect={3 / 1}>
					<AreaChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#0ea5e9' stopOpacity={0.6} />
								<stop offset='80%' stopColor='#0ea5e9' stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey='name' stroke='#6b7280' />
						<Tooltip
							wrapperStyle={{
								outline: 'none',
								fontSize: '14px',
								fontWeight: 300
							}}
						/>
						<Area
							type='monotone'
							dataKey='Total'
							stroke='#06b6d4'
							fillOpacity={1}
							fill='url(#total)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	);
};
export default UserChart;

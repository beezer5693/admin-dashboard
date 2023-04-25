'use client';

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from 'next-themes';

const data = [
	{ name: 'January', Total: 1200 },
	{ name: 'February', Total: 2100 },
	{ name: 'March', Total: 800 },
	{ name: 'April', Total: 1600 },
	{ name: 'May', Total: 900 },
	{ name: 'June', Total: 1700 }
];

const UserChart = () => {
	const { theme } = useTheme();
	const isDarkMode = theme === 'dark';

	return (
		<div className='col-span-3 flex flex-col justify-between xl:col-span-2 rounded-2xl bg-white px-4 py-4 dark:bg-zinc-950'>
			<span className='text-xl text-gray-800 dark:text-gray-200'>
				User Transactions (Last 6 Months)
			</span>
			<div>

			<ResponsiveContainer width='100%' height='100%' aspect={3 / 1}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#2563eb' stopOpacity={0.6} />
							<stop offset='80%' stopColor='#2563eb' stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey='name' stroke={isDarkMode ? '#fff' : '#1f2937'} />
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
						stroke='#2563eb'
						fillOpacity={1}
						fill='url(#total)'
					/>
				</AreaChart>
			</ResponsiveContainer>
			</div>
		</div>
	);
};
export default UserChart;

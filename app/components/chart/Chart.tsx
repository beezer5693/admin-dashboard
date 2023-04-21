'use client';

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts';

const data = [
	{ name: 'January', Total: 1200 },
	{ name: 'February', Total: 2100 },
	{ name: 'March', Total: 800 },
	{ name: 'April', Total: 1600 },
	{ name: 'May', Total: 900 },
	{ name: 'June', Total: 1700 }
];

const Chart = () => {
	return (
		<div className='col-span-3 flex flex-col justify-between rounded-lg bg-white px-3 pb-6 pt-3 shadow-2xl shadow-indigo-400/20'>
			<span className='text-xl text-slate-400'>Last 6 Months (Revenue)</span>
			<div className='flex items-center justify-center px-2'>
				<ResponsiveContainer width='100%' aspect={2 / 1}>
					<AreaChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#4f46e5' stopOpacity={0.8} />
								<stop offset='95%' stopColor='#4f46e5' stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey='name' stroke='#94a3b8' />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='Total'
							stroke='#4f46e5'
							fillOpacity={1}
							fill='url(#total)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
export default Chart;

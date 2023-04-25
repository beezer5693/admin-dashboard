import Widget from './components/widget/Widget';
import Chart from './components/chart/Chart';
import Featured from './components/featured/Featured';
import Table from './components/table/Table';

export default function Home() {
	return (
		<div className='mt-20 min-w-[500px] px-10'>
			<div className='grid min-w-max grid-cols-1 gap-4 pt-8 lg:grid-cols-2 xl:grid-cols-4'>
				<Widget type='user' />
				<Widget type='order' />
				<Widget type='earning' />
				<Widget type='balance' />
			</div>
			<div className='mt-8 grid grid-cols-1 gap-4 xl:grid-cols-5'>
				<Featured />
				<Chart />
			</div>
			<div className='mt-8 grid grid-cols-1'>
				<Table />
			</div>
		</div>
	);
}

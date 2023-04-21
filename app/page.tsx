import Widget from './components/widget/Widget';
import Chart from './components/chart/Chart';
import Featured from './components/featured/Featured';

export default function Home() {
	return (
		<div className='px-10'>
			<div className='grid grid-cols-4 gap-4 pt-8'>
				<Widget type='user' />
				<Widget type='order' />
				<Widget type='earning' />
				<Widget type='balance' />
			</div>
			<div className='mt-8 grid grid-cols-5 gap-4'>
				<Featured />
				<Chart />
			</div>
		</div>
	);
}

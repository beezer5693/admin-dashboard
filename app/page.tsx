import Widget from './components/widget/Widget';

export default function Home() {
	return (
		<>
			<div className='grid grid-cols-4 gap-4 px-10 pt-8'>
				<Widget type='user' />
				<Widget type='order' />
				<Widget type='earning' />
				<Widget type='balance' />
			</div>
			<div>home</div>
		</>
	);
}

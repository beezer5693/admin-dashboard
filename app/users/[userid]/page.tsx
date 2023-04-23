import UserChart from '@/app/components/chart/UserChart';
import UserTransactions from '@/app/components/table/UserTable';

interface ParamProps {
	params: {
		userid: string;
	};
}

const User = ({ params: { userid } }: ParamProps) => {
	return (
		<div className='mt-28 px-10'>
			<div className='flex flex-col gap-10'>
				<div className='flex gap-4'>
					<div className='relative flex basis-2/6 flex-col items-center justify-center rounded-lg bg-white pt-4'>
						<div className='absolute right-3 top-3 cursor-pointer rounded-lg bg-gray-300/30 px-2 py-1 text-sm text-gray-400 hover:text-gray-800'>
							Edit
						</div>
						<h1 className='absolute left-4 top-4 text-xl text-gray-800'>
							Profile
						</h1>
						<div className='flex gap-6'>
							<img
								className='h-28 w-28 rounded-full object-cover'
								src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80'
								alt=''
							/>
							<div>
								<h1 className='mb-3 text-2xl'>Brandon Bryan</h1>
								<div className='flex flex-col gap-3'>
									<div className='flex items-center space-x-3'>
										<span className='text-gray-500'>Email:</span>
										<span className='text-sm font-light text-gray-500'>
											janedoe@gmail.com
										</span>
									</div>
									<div className='flex items-center space-x-3'>
										<span className='text-gray-500'>Phone:</span>
										<span className='text-sm font-light text-gray-500'>
											555-555-5555
										</span>
									</div>
									<div className='flex space-x-3'>
										<span className='text-gray-500'>Address:</span>
										<span className='mt-0.5 text-sm font-light text-gray-500'>
											11720 NW 9Th St <br /> Plantation, FL <br /> 33325
										</span>
									</div>
									<div className='flex items-center space-x-3'>
										<span className='text-gray-500'>Country:</span>
										<span className='text-sm font-light text-gray-500'>
											USA
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grow rounded-lg bg-white px-4 py-4'>
						<UserChart />
					</div>
				</div>
				<div>
					<UserTransactions />
				</div>
			</div>
		</div>
	);
};
export default User;

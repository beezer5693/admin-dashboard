const NewProduct = () => {
	return (
		<div className='mt-40 flex flex-col items-center px-20'>
			<div className='flex w-1/2 flex-col rounded-lg bg-white p-8'>
				<h1 className='text-xl text-black'>Add a New Product</h1>
				<div className='mt-8 flex flex-col justify-center'>
					<form>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Title</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='Apple iPhone 12 Pro Max'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Description</label>
							<textarea
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								placeholder='Description...'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Category</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='Computers'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Price</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='0.00'
							/>
						</div>
						<div className='mb-6 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Stock</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='In Stock'
							/>
						</div>
						<button
							type='submit'
							className='w-full rounded-lg bg-blue-600 p-2.5 text-gray-100 transition duration-300 ease-in-out hover:bg-blue-600/80'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default NewProduct;

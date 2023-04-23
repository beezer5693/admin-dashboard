'use client';

import { useState, ChangeEvent } from 'react';
import {
	MdOutlineAddPhotoAlternate,
	MdOutlineDriveFolderUpload
} from 'react-icons/md';

const Register = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		} else {
			setFile(null);
		}
	};
	return (
		<div className='mt-40 flex flex-col items-center px-20'>
			<div className='flex w-1/2 flex-col rounded-lg bg-white p-8 shadow-2xl shadow-gray-400/40'>
				<h1 className='text-xl text-black'>Create a New User</h1>
				<div className='mt-8 flex flex-col justify-center'>
					<form>
						<div className='mb-6 flex w-full items-center justify-between gap-3 rounded-lg border-2 border-dashed p-2'>
							<div className='flex shrink-0 items-center gap-2'>
								<img
									className='mr-3 h-16 w-16 rounded-lg object-cover'
									src={file ? URL.createObjectURL(file) : undefined}
									alt='Current profile photo'
								/>
								<div className='text-sm text-gray-500/80'>
									Upload a profile picture.
								</div>
							</div>
							<label
								htmlFor='profile'
								className='rounded-full border-0 bg-gray-100 px-4 py-2 text-sm text-black transition hover:bg-gray-200/60'
							>
								Choose image
							</label>
							<input
								type='file'
								onChange={e => handleFile(e)}
								id='profile'
								className='hidden'
							/>
						</div>
						<div className='flex gap-2'>
							<div className='mb-3 flex w-1/2 flex-col'>
								<label className='text-sm text-gray-500/80'>First name</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
									type='text'
									placeholder='Jane'
								/>
							</div>
							<div className='flex w-1/2 flex-col'>
								<label className='text-sm text-gray-500/80'>Last name</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
									type='text'
									placeholder='Doe'
								/>
							</div>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Username</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='jane_doe'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Email</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='email'
								placeholder='jane_doe@example.com'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Phone</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='+1 555-555-5555'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Password</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='********'
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80'>Street address</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
								type='text'
								placeholder='123 Main St'
							/>
						</div>
						<div className='mb-3 flex gap-2'>
							<div className='mb-3 flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80'>City</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
									type='text'
									placeholder='Miami'
								/>
							</div>
							<div className='mb-3 flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80'>State</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
									type='text'
									placeholder='FL'
								/>
							</div>
							<div className='flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80'>Zip</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-500'
									type='text'
									placeholder='33333'
								/>
							</div>
						</div>
						<button
							type='submit'
							className='w-full rounded-lg bg-black p-2.5 text-gray-100 transition duration-300 ease-in-out hover:opacity-80'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Register;

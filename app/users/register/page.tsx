'use client'

import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth, storage } from '../../firebase/firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { BsFillImageFill } from 'react-icons/bs'

const Register = () => {
	const [file, setFile] = useState<File | null>(null)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		phone: '',
		password: '',
		street: '',
		city: '',
		state: '',
		zip: '',
	})

	const { firstName, lastName, userName, email, phone, password, street, city, state, zip } = formData

	useEffect(() => {
		const uploadFile = async () => {
			const uniqueFileName = `${new Date().getTime()}-${file?.name}`
			const storageRef = ref(storage, uniqueFileName)

			const uploadTask = uploadBytesResumable(storageRef, file!)

			uploadTask.on(
				'state_changed',
				snapshot => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log('Upload is ' + progress + '% done')
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
						default:
							break
					}
				},
				error => {
					console.log(error)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
						setFormData(prev => ({
							...prev,
							profileImg: downloadURL,
						}))
					})
				}
			)
		}
		file && uploadFile()
	}, [file])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const id = e.target.id

		setFormData(prev => ({
			...prev,
			[id]: e.target.value,
		}))
	}

	const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
		} else {
			setFile(null)
		}
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (
			!firstName ||
			!lastName ||
			!userName ||
			!email ||
			!phone ||
			!password ||
			!street ||
			!city ||
			!state ||
			!zip
		) {
			console.log('Please fill out all fields')
			return
		}

		try {
			const userRef = await createUserWithEmailAndPassword(auth, email, password)

			const formDataCopy = { ...formData, id: userRef.user.uid, timeStamp: serverTimestamp() }

			await setDoc(doc(db, 'users', userRef.user.uid), formDataCopy)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='min-w-[500px]'>
			<div className='flex flex-col rounded-2xl bg-white p-8 dark:bg-zinc-950/60'>
				<h1 className='text-xl text-black dark:text-gray-200'>Create a New User</h1>
				<div className='mt-8 flex h-full flex-col justify-center'>
					<form onSubmit={handleSubmit}>
						<div className='mb-6 flex items-center justify-between gap-3 rounded-lg border-2 border-dashed p-2 dark:border-gray-500'>
							<div className='flex shrink-0 items-center gap-2'>
								{file ? (
									<img
										className='mr-3 h-16 w-16 rounded-lg object-cover'
										src={URL.createObjectURL(file)}
										alt='Current profile photo'
									/>
								) : (
									<div className='flex h-16 w-16 items-center justify-center rounded-lg bg-blue-300/30'>
										<BsFillImageFill className='h-5 w-5 fill-blue-600' />
									</div>
								)}
								<div className='text-sm text-gray-500/80 dark:text-gray-400'>
									Upload a profile picture.
								</div>
							</div>
							<label
								htmlFor='profile'
								className='cursor-pointer rounded-full border-0 bg-gray-100 px-4 py-2 text-sm text-black transition hover:bg-gray-200/60 dark:bg-zinc-800 dark:text-gray-400 dark:hover:text-gray-300'
							>
								Choose image
							</label>
							<input type='file' onChange={e => handleFile(e)} id='profile' className='hidden' />
						</div>
						<div className='flex gap-2'>
							<div className='mb-3 flex w-1/2 flex-col'>
								<label className='text-sm text-gray-500/80 dark:text-gray-400'>First name</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
									type='text'
									placeholder='Jane'
									id='firstName'
									onChange={handleChange}
								/>
							</div>
							<div className='flex w-1/2 flex-col'>
								<label className='text-sm text-gray-500/80 dark:text-gray-400'>Last name</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
									type='text'
									placeholder='Doe'
									id='lastName'
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80 dark:text-gray-400'>Username</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
								type='text'
								placeholder='jane_doe'
								id='userName'
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80 dark:text-gray-400'>Email</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
								type='email'
								placeholder='jane_doe@example.com'
								id='email'
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80 dark:text-gray-400'>Phone</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
								type='text'
								placeholder='+1 555-555-5555'
								id='phone'
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80 dark:text-gray-400'>Password</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
								type='text'
								placeholder='********'
								id='password'
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3 flex flex-col'>
							<label className='text-sm text-gray-500/80 dark:text-gray-400'>Street address</label>
							<input
								className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
								type='text'
								placeholder='123 Main St'
								id='street'
								onChange={handleChange}
							/>
						</div>
						<div className='mb-3 flex gap-2'>
							<div className='mb-3 flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80 dark:text-gray-400'>City</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
									type='text'
									placeholder='Miami'
									id='city'
									onChange={handleChange}
								/>
							</div>
							<div className='mb-3 flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80 dark:text-gray-400'>State</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
									type='text'
									placeholder='FL'
									id='state'
									onChange={handleChange}
								/>
							</div>
							<div className='flex w-1/3 flex-col'>
								<label className='text-sm text-gray-500/80 dark:text-gray-400'>Zip</label>
								<input
									className='mt-1 rounded-lg border p-2.5 outline-none placeholder:text-gray-400 focus:border-2 focus:border-blue-600 dark:border-zinc-950 dark:bg-gray-300/20 dark:text-gray-400 dark:focus:border-blue-600'
									type='text'
									placeholder='33333'
									id='zip'
									onChange={handleChange}
								/>
							</div>
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
	)
}
export default Register

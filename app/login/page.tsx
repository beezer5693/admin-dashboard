'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { Spinner } from './components/Spinner'

type FormProps = {
	email: string
	password: string
}

export default function Login() {
	const [formData, setFormData] = useState<FormProps>({
		email: '',
		password: '',
	})
	const [error, setError] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const { email, password } = formData
	const router = useRouter()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setLoading(true)

		if (!email || !password) {
			setError(true)

			setTimeout(() => {
				setError(false)
			}, 5000)

			setLoading(false)
			return
		}

		try {
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)

			const user = await userCredentials.user
			console.log(user)

			router.push('/')
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setFormData(prevData => ({
			...prevData,
			[e.target.id]: e.target.value,
		}))
	}

	const errorContent = (
		<div className='relative flex justify-center rounded-xl bg-red-600 p-2'>
			<BsExclamationCircle className='absolute left-1 top-1/2 -translate-y-1/2 text-2xl text-white' />
			<span className='text-white'>Email and password are required.</span>
		</div>
	)

	return (
		<div className='min-w-[600px] rounded-xl bg-zinc-950/80 p-5'>
			<h1 className='mb-6 text-center text-3xl text-gray-300'>Login</h1>
			<form className='space-y-5' onSubmit={handleSubmit}>
				<div>
					<input
						className='w-full rounded-lg bg-zinc-800 p-2.5 text-gray-300'
						type='email'
						id='email'
						placeholder='Email'
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='w-full rounded-lg bg-zinc-800 p-2.5 text-gray-300'
						type='password'
						id='password'
						placeholder='Password'
						value={password}
						onChange={handleChange}
					/>
				</div>

				<button
					disabled={loading}
					type='submit'
					className='flex w-full items-center justify-center gap-4 rounded-lg bg-blue-600 p-2.5 text-gray-100 transition duration-300 ease-in-out hover:bg-blue-600/80 disabled:opacity-70'
				>
					{loading && <Spinner />}
					{loading ? 'Logging in...' : 'Login'}
				</button>
				{error && errorContent}
			</form>
		</div>
	)
}

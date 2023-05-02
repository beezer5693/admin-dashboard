'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { auth } from '../firebase/firebaseConfig'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import OAuth from '../components/OAuth/OAuth'
import { Spinner } from '../components/Spinner/Spinner'
import Link from 'next/link'

type FormProps = {
	firstName: string
	lastName: string
	emailAddress: string
	password: string
}

export default function SignIn() {
	const [formData, setFormData] = useState<FormProps>({
		firstName: '',
		lastName: '',
		emailAddress: '',
		password: '',
	})
	const [error, setError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { dispatch } = useContext(AuthContext)

	const router = useRouter()

	const { firstName, lastName, emailAddress, password } = formData

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setFormData(prevData => ({
			...prevData,
			[e.target.id]: e.target.value,
		}))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)

		if (!firstName || !lastName || !emailAddress || !password) {
			setError(true)

			setTimeout(() => {
				setError(false)
			}, 5000)

			setIsLoading(false)
			return
		}

		try {
			const userRef = await createUserWithEmailAndPassword(auth, emailAddress, password)

			const formDataCopy = { ...formData, id: userRef.user.uid, timeStamp: serverTimestamp() }

			await setDoc(doc(db, 'db-users', userRef.user.uid), formDataCopy)

			const userPayload = {
				id: userRef.user.uid,
				firstName,
				lastName,
				email: emailAddress,
			}

			dispatch({ type: 'LOGIN', payload: userPayload })
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	const errorContent = (
		<div className='relative flex justify-center rounded-xl bg-red-600 p-2'>
			<BsExclamationCircle className='absolute left-1 top-1/2 -translate-y-1/2 text-2xl text-white' />
			<span className='text-white'>Email and password are required.</span>
		</div>
	)

	return (
		<div className='min-w-[600px] rounded-xl bg-white p-5 shadow-2xl shadow-gray-300/30'>
			<h1 className='mb-6 text-center text-2xl text-gray-900'>Sign up for an account.</h1>
			<form className='mb-5 space-y-5' onSubmit={handleSubmit}>
				<div className='flex items-center gap-2'>
					<input
						className='w-1/2 rounded-lg border bg-white p-2.5 text-gray-800'
						type='first'
						id='firstName'
						placeholder='First name'
						value={firstName}
						onChange={handleChange}
					/>
					<input
						className='w-1/2 rounded-lg border bg-white p-2.5 text-gray-800'
						type='last'
						id='lastName'
						placeholder='Last name'
						value={lastName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='w-full rounded-lg border bg-white p-2.5 text-gray-800'
						type='email'
						id='emailAddress'
						placeholder='Email'
						value={emailAddress}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='w-full rounded-lg border bg-white p-2.5 text-gray-800'
						type='password'
						id='password'
						placeholder='Password'
						value={password}
						onChange={handleChange}
					/>
				</div>
				<button
					disabled={isLoading}
					type='submit'
					className='flex w-full items-center justify-center gap-4 rounded-lg bg-blue-600 p-2.5 text-gray-100 transition duration-300 ease-in-out hover:bg-blue-600/80 disabled:opacity-70'
				>
					{isLoading && <Spinner />}
					{isLoading ? 'Signing up...' : 'Sign up'}
				</button>
				<div className='flex w-full items-center'>
					<div className='w-1/2 border-t'></div>
					<p className='mx-3 flex-1 text-black'>or</p>
					<div className='w-1/2 border-t'></div>
				</div>
				{error && errorContent}
			</form>
			<OAuth />
			<div className='mt-10 flex w-full items-center gap-1'>
				<span>Already have an account?</span>
				<Link href='/login'>
					<button className='rounded-lg text-blue-600 hover:opacity-80'>Sign in here.</button>
				</Link>
			</div>
		</div>
	)
}

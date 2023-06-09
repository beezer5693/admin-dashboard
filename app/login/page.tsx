'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { auth } from '../firebase/firebaseConfig'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import OAuth from '../components/OAuth/OAuth'
import { Spinner } from '../components/Spinner/Spinner'
import Link from 'next/link'

type FormProps = {
	emailAddress: string
	password: string
}

export default function Login() {
	const [formData, setFormData] = useState<FormProps>({
		emailAddress: '',
		password: '',
	})
	const [error, setError] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const { dispatch } = useContext(AuthContext)

	const { emailAddress, password } = formData
	const router = useRouter()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setFormData(prevData => ({
			...prevData,
			[e.target.id]: e.target.value,
		}))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)

		if (!emailAddress || !password) {
			setError(true)

			setTimeout(() => {
				setError(false)
			}, 5000)

			setLoading(false)
			return
		}

		try {
			const userCredentials = await signInWithEmailAndPassword(auth, emailAddress, password)

			const userRef = userCredentials.user

			const q = query(collection(db, 'db-users'), where('id', '==', userRef.uid))

			const querySnap = await getDocs(q)

			const { id, firstName, lastName, email } = querySnap.docs[0].data()

			const user: DBUser = {
				id,
				firstName,
				lastName,
				email,
			}

			dispatch({
				type: 'LOGIN',
				payload: user || null!,
			})

			router.push('/')

			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
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
			<h1 className='mb-6 text-center text-2xl text-gray-900'>Sign in to your account.</h1>
			<form className='mb-5 space-y-5' onSubmit={handleSubmit}>
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
					disabled={loading}
					type='submit'
					className='flex w-full items-center justify-center gap-4 rounded-lg bg-blue-600 p-2.5 text-gray-100 transition duration-300 ease-in-out hover:bg-blue-600/80 disabled:opacity-70'
				>
					{loading && <Spinner />}
					{loading ? 'Signing in...' : 'Sign in'}
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
				<span>Don't have an account?</span>
				<Link href='/signup'>
					<button className='rounded-lg text-blue-600 hover:opacity-80'>Signup here.</button>
				</Link>
			</div>
		</div>
	)
}

'use client'

import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { auth } from '../../firebase/firebaseConfig'
import { FcGoogle } from 'react-icons/fc'
import { Spinner } from '../Spinner/Spinner'

export default function OAuth() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { dispatch } = useContext(AuthContext)
	const router = useRouter()

	const handleGoogleSignIn = async () => {
		try {
			const provider = new GoogleAuthProvider()
			const result = await signInWithPopup(auth, provider)
			const user = result.user

			setIsLoading(true)

			const docRef = doc(db, 'users', user.uid)
			const docSnap = await getDoc(docRef)

			if (!docSnap.exists()) {
				await setDoc(doc(db, 'db-users', user.uid), {
					id: user.uid,
					firstName: user.displayName?.split(' ')[0],
					lastName: user.displayName?.split(' ')[1],
					emailAddress: user.email,
				})

				const userPayload: DBUser = {
					id: user.uid,
					firstName: user.displayName?.split(' ')[0]!,
					lastName: user.displayName?.split(' ')[1]!,
					email: user.email!,
				}

				dispatch({ type: 'LOGIN', payload: userPayload })
				router.push('/')
				setIsLoading(false)
			}
		} catch (error) {
			console.log(error)
			setIsLoading(false)
		}
	}
	return (
		<>
			<button
				onClick={handleGoogleSignIn}
				className='flex w-full items-center justify-center gap-2 rounded-lg border bg-black p-2.5 text-white hover:opacity-80'
			>
				{isLoading ? <Spinner /> : <FcGoogle className='h-5 w-5' />}
				Google
			</button>
		</>
	)
}

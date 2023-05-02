import { ReactElement, ReactNode, createContext, useEffect, useReducer } from 'react'

type StateType = {
	user: DBUser | null
}

export const initialState: StateType = {
	user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') as string) : null,
}

type AuthReducerActionType = {
	type: 'LOGIN' | 'LOGOUT'
	payload?: DBUser
}

function authReducer(state: StateType, action: AuthReducerActionType): StateType {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload!,
			}
		case 'LOGOUT':
			return {
				...state,
				user: null,
			}
		default:
			return state
	}
}

function useAuthContext(initialState: StateType) {
	const [state, dispatch] = useReducer(authReducer, initialState)

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user))
	}, [state.user])

	return { state, dispatch }
}

type UseAuthContextType = ReturnType<typeof useAuthContext>

const initAuthContext: UseAuthContextType = {
	state: initialState,
	dispatch: () => null,
}

export const AuthContext = createContext<UseAuthContextType>(initAuthContext)

type ChildrenType = {
	children?: ReactElement | ReactElement[] | ReactNode | null
}

export function AuthProvider({ children, ...initialState }: ChildrenType & StateType) {
	return <AuthContext.Provider value={useAuthContext(initialState)}>{children}</AuthContext.Provider>
}

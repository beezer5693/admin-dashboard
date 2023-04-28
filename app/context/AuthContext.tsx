import { ReactElement, ReactNode, createContext, useReducer } from 'react'

type StateType = {
	user: User | null
	isLoggedIn: boolean
}

export const initialState: StateType = {
	user: null,
	isLoggedIn: false,
}

type AuthReducerActionType = {
	type: 'LOGIN' | 'LOGOUT'
	payload: User | null
}

function authReducer(
	state: StateType,
	action: AuthReducerActionType
): StateType {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload,
				isLoggedIn: true,
			}
		case 'LOGOUT':
			return {
				...state,
				user: null,
				isLoggedIn: false,
			}
		default:
			return state
	}
}

function useAuthContext(initialState: StateType) {
	const [state, dispatch] = useReducer(authReducer, initialState)

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

export function AuthProvider({
	children,
	...initialState
}: ChildrenType & StateType) {
	return (
		<AuthContext.Provider value={useAuthContext(initialState)}>
			{children}
		</AuthContext.Provider>
	)
}

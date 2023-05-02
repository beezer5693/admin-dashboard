export default function checkAuthStatus(user: DBUser | null): boolean {
	return user ? true : false
}

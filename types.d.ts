type User = {
	id: string
	firstName: string
	lastName: string
	email: string
	userName: string
	phone: string
	street: string
	city: string
	state: string
	zip: string
	profileImg: string
	status: 'active' | 'pending' | null
}

type DBUser = {
	id: string
	firstName: string
	lastName: string
	email: string
}

type User = {
	id: number
	firstName: string
	lastName: string
	email: string
	age: number
	address: {
		street: string
		city: string
		state: string
		postalCode: string
	}
	imgUrl: string
	status: 'active' | 'pending'
}

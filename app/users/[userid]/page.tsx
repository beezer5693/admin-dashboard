interface ParamProps {
	params: {
		userid: string;
	};
}

const User = ({ params: { userid } }: ParamProps) => {
	return <h1>ID: {userid}</h1>;
};
export default User;

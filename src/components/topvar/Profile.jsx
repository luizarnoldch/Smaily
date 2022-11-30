//import { useContext } from "react"
//import UserContext from "../../context/UserContext"

const Profile = () => {
	//console.log('Profile component')

	//const { user, login, logout } = useContext(UserContext)

	const user = {
		name: 'arnold',
	}

	return (
		<div className='flex justify-center items-center gap-4'>
			<div>
				<h2>{user ? `Hola ${user.name}` : 'Bienvenido'}</h2>
			</div>
			<button className='bg-blue-500 h-5 hover:bg-blue-300/70 active:bg-blue-700'>
				Login
			</button>
			<button className='bg-red-500 h-5 hover:bg-red-300/70 active:bg-red-700'>
				Logout
			</button>
		</div>
	)
}

export default Profile

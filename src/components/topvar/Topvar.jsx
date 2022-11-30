import Profile from './Profile'
import Comands from './Comands'

const Topvar = () => {
	console.log('Topvar')

	return (
		<div className='border border-red-500'>
			<div className='container flex items-center justify-around h-10'>
				<div>
					<Comands />
				</div>
				<div>
					<Profile />
				</div>
			</div>
		</div>
	)
}

export default Topvar

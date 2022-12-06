import { Link } from 'react-router-dom'

const routes = [
	{
		label: 'Master',
		route: '/master',
	},
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Clientes',
		route: '/cliente',
	},
	{
		label: 'Mascotas',
		route: '/mascota',
	},
	{
		label: 'Horarios',
		route: '/horario',
	},
]

const Sidebar = () => {
	console.log('Sidebar')
	return (
		<header className='h-full bg-gradient-to-r from-naranja via-naranja/80 to-naranja shadow-md'>
			<nav className='h-full'>
				<ul className='flex flex-col justify-center gap-5 h-full'>
					{routes.map(({ label, route }) => (
						<li key={route}>
							<Link to={route}>
								<div className='flex items-center justify-center rounded-md shadow-md bg-white h-10 w-auto mx-2 ease-in-out duration-300 hover:bg-white/70 hover:duration-100 active:bg-white/30 active:shadow-lg active:duration-100'>
									{label}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Sidebar

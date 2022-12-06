import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Horarios from './pages/Horarios'
import Mascotas from './pages/Mascotas'
import Master from './pages/Master'
import FormContextProvider from './context/FormContext'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<FormContextProvider>
				<Layout />
			</FormContextProvider>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/cliente',
				element: <Clientes />,
			},
			{
				path: '/mascota',
				element: <Mascotas />,
			},
			{
				path: '/horario',
				element: <Horarios />,
			},
			{
				path: '/master',
				element: <Master />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App

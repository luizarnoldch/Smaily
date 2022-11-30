import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../context/FormContext'
import { types } from '../reducers/FormReducer'

import FormService from '../components/form/FormService'
import EditService from '../components/form/EditService'
import Table from '../components/table/Table'

const data = [
	{
		servicio: 1,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
	{
		servicio: 2,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
	{
		servicio: 3,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
	{
		servicio: 4,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
	{
		servicio: 5,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
	{
		servicio: 6,
		mascota: 'bubu',
		cliente: 'milko',
		tipo_servicio: 'corte',
		precio: '10',
		fecha: '24/04/11',
		estado: 'incompleto',
	},
]

const Home = () => {
	const store = useFormServiceState()
	const dispatch = useFormServiceDispatch()
	const { service } = store
	const { visible, id } = service

	return (
		<div className='m-10 container'>
			<button
				type='button'
				onClick={() => dispatch({ type: types.ChangeFormServiceState })}
				className='bg-blue-500 rounded-md hover:bg-blue-200 active:bg-blue-400 my-8 px-4 py-2'
			>
				Agregar Servicio
			</button>
			{visible && (
				<div className={`transition-all ease-in-out duration-300`}>
					{id ? <EditService /> : <FormService />}
				</div>
			)}

			<hr />
			<Table data={data} type={'service'} />
		</div>
	)
}

export default Home

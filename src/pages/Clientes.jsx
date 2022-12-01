import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../context/FormContext'
import { types } from '../reducers/FormReducer'

import FormClient from '../components/form/FormClient'
import EditClient from '../components/form/EditClient'
import Table from '../components/table/Table'

const data = [
	{
		cliente: 1,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
	{
		cliente: 2,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
	{
		cliente: 3,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
	{
		cliente: 4,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
	{
		cliente: 5,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
	{
		cliente: 6,
		nopmbre: 'jose milko',
		apellido: 'levano bardales',
		telefono: '999 999 999',
	},
]

const Clientes = () => {
	const store = useFormServiceState()
	const dispatch = useFormServiceDispatch()
	const { client } = store
	const { visible, id } = client

	return (
		<div className='m-10 container'>
			<button
				type='button'
				onClick={() => dispatch({ type: types.ChangeFormClientState })}
				className='bg-blue-500 rounded-md hover:bg-blue-200 active:bg-blue-400 my-8 px-4 py-2'
			>
				Agregar Cliente
			</button>
			{visible && (
				<div className={`transition-all ease-in-out duration-300`}>
					{id ? <EditClient /> : <FormClient />}
				</div>
			)}
			<hr />
			<Table data={data} type={'client'} />
		</div>
	)
}

export default Clientes

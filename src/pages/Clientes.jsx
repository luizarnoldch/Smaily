import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../context/FormContext'
import { types } from '../reducers/FormReducer'

import FormClient from '../components/form/FormClient'
import EditClient from '../components/form/EditClient'
import Table from '../components/table/Table'

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
				className='bg-blue-500 rounded-md hover:bg-blue-200 active:bg-blue-400 my-8 px-4 py-2 font-bold'
			>
				Agregar Cliente
			</button>
			{visible && (
				<div className={`transition-all ease-in-out duration-300`}>
					{id ? <EditClient /> : <FormClient />}
				</div>
			)}
			<hr />
			<Table type={'cliente'} />
		</div>
	)
}

export default Clientes

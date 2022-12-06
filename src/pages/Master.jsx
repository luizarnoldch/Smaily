import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../context/FormContext'
import { types } from '../reducers/FormReducer'

import FormMaster from '../components/form/FormMaster'
import EditMaster from '../components/form/EditMaster'
import Table from '../components/table/Table'

const data = [
	{
		tipo_servicio: 1,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
	{
		tipo_servicio: 2,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
	{
		tipo_servicio: 3,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
	{
		tipo_servicio: 4,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
	{
		tipo_servicio: 5,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
	{
		tipo_servicio: 6,
		nombre_servicio: 'jose milko',
		costo_servicio: 'S/ 10',
	},
]

const Master = () => {
	const store = useFormServiceState()
	const dispatch = useFormServiceDispatch()
	const { master } = store
	const { visible, id } = master

	return (
		<div className='m-10 container'>
			<button
				type='button'
				onClick={() => dispatch({ type: types.ChangeFormMasterState })}
				className='bg-blue-500 rounded-md hover:bg-blue-200 active:bg-blue-400 my-8 px-4 py-2 font-bold'
			>
				Agregar Tratamiento
			</button>
			{visible && (
				<div className={`transition-all ease-in-out duration-300`}>
					{id ? <EditMaster /> : <FormMaster />}
				</div>
			)}
			<hr />
			<Table data={data} type={'tratamiento'} />
		</div>
	)
}

export default Master

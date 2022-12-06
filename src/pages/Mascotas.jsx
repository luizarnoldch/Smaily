import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../context/FormContext'
import { types } from '../reducers/FormReducer'

import FormPet from '../components/form/FormPet'
import EditPet from '../components/form/EditPet'
import Table from '../components/table/Table'

const data = [
	{
		mascota: 1,
		nombre: 'jose milko',
		cliente: 2,
	},
	{
		mascota: 2,
		nombre: 'jose milko',
		cliente: 3,
	},
	{
		mascota: 3,
		nombre: 'jose milko',
		cliente: 3,
	},
	{
		mascota: 4,
		nombre: 'jose milko',
		cliente: 1,
	},
	{
		mascota: 5,
		nombre: 'jose milko',
		cliente: 1,
	},
	{
		mascota: 6,
		nombre: 'jose milko',
		cliente: 5,
	},
]

const Mascotas = () => {
	const store = useFormServiceState()
	const dispatch = useFormServiceDispatch()
	const { pet } = store
	const { visible, id } = pet

	return (
		<div className='m-10 container'>
			<button
				type='button'
				onClick={() => dispatch({ type: types.ChangeFormPetState })}
				className='bg-blue-500 rounded-md hover:bg-blue-200 active:bg-blue-400 my-8 px-4 py-2 font-bold'
			>
				Agregar Mascota
			</button>
			{visible && (
				<div className={`transition-all ease-in-out duration-300`}>
					{id ? <EditPet /> : <FormPet />}
				</div>
			)}
			<hr />
			<Table data={data} type={'mascota'} />
		</div>
	)
}

export default Mascotas

import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../../context/FormContext'
import { types } from '../../reducers/FormReducer'
import { AiOutlineEdit } from 'react-icons/ai'

const EditButton = ({ reFetch, type, item }) => {
	const dispatch = useFormServiceDispatch()
	const handleEdit = () => {
		switch (type) {
			case 'servicio':
				return dispatch({
					type: types.ChangeIDService,
					payload: item.servicio,
				})
			case 'cliente':
				return dispatch({
					type: types.ChangeIDClient,
					payload: item.id_cliente,
				})
			case 'mascota':
				return dispatch({
					type: types.ChangeIDPet,
					payload: item.mascota,
				})
			case 'tratamiento':
				return dispatch({
					type: types.ChangeIDMaster,
					payload: item.tipo_servicio,
				})
			default:
				return
		}
	}
	return (
		<button
			type='button'
			onClick={() => handleEdit()}
			className='rounded-full hover:bg-blue-200 active:bg-blue-400 flex-center w-8 h-8 text-2xl text-blue-500'
		>
			<AiOutlineEdit />
		</button>
	)
}

export default EditButton

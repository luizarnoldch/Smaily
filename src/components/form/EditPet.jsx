import { useReducer } from 'react'
import { useFormServiceState } from '../../context/FormContext'
import FormPetReducer, {
	types,
	initialPetForm,
} from '../../reducers/FormPetReducer'

const EditPet = () => {
	const store = useFormServiceState()
	const { pet } = store
	const { id } = pet

	/*
	const initialServiceForm = {
		service: '',
		date_service: '',
		dni_client: '',
		pet_client: '',
	}
	*/

	// initialServiceForm  <- Enviar datos

	const [state, dispatch] = useReducer(FormPetReducer, initialPetForm)
	const HandleSubmit = e => {
		e.preventDefault()
		console.log(state)
		dispatch({ type: types.initialState })
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Nombre Mascota */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Nombre(s) de Mascota</h3>
						<input
							autoFocus
							type='text'
							value={state.name_pet}
							placeholder='Nombre(s)'
							onChange={e =>
								dispatch({
									type: types.onChangePetName,
									payload: e.target.value,
								})
							}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* DNI Cliente */}
				<div className=''>
					<h3>DNI Cliente</h3>
					<input
						type='text'
						value={state.name_client}
						placeholder='Apellidos(s)'
						onChange={e =>
							dispatch({
								type: types.onChangeClientName,
								payload: e.target.value,
							})
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>

				<div>
					<h3>Nombre del Cliente</h3>
					<p className='w-full border border-black/30 rounded-md px-4 py-2'>
						{'Cliente'}
					</p>
				</div>

				<div>
					<button
						type='submit'
						className='w-full bg-marron rounded-md px-4 py-2 hover:bg-marron/50 active:bg-marron/70'
					>
						Editar
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditPet

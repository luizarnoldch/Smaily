import { useReducer } from 'react'
import FormClientReducer, {
	types,
	initialClientForm,
} from '../../reducers/FormClientReducer'

const FormClient = () => {
	const [state, dispatch] = useReducer(FormClientReducer, initialClientForm)
	const HandleSubmit = e => {
		e.preventDefault()
		console.log(state)
		dispatch({ type: types.initialState })
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Nombre Cliente */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Nombre(s) </h3>
						<input
							type='text'
							value={state.name_client}
							placeholder='Nombre(s)'
							onChange={e =>
								dispatch({ type: types.onChangeName, payload: e.target.value })
							}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* Apellido Cliente */}
				<div className=''>
					<h3>Apellido(s)</h3>
					<input
						type='text'
						value={state.last_name_client}
						placeholder='Apellidos(s)'
						onChange={e =>
							dispatch({
								type: types.onChangeLastName,
								payload: e.target.value,
							})
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>

				{/* DNI */}
				<div className=''>
					<h3>DNI</h3>
					<input
						type='text'
						placeholder='DNI'
						value={state.dni_client}
						onChange={e =>
							dispatch({ type: types.onChangeDNI, payload: e.target.value })
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>

				{/* telefono */}
				<div className=''>
					<h3>Telefono</h3>
					<input
						type='text'
						placeholder='999 999 999'
						value={state.number_client}
						onChange={e =>
							dispatch({ type: types.onChangeNumber, payload: e.target.value })
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>
				<div></div>
				<div></div>

				<div>
					<button
						type='submit'
						className='w-full bg-naranja rounded-md px-4 py-2 hover:bg-naranja/50 active:bg-naranja/70'
					>
						Agregar
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormClient

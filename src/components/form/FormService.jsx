import { useReducer } from 'react'
import FormServiceReducer, {
	types,
	initialServiceForm,
} from '../../reducers/FormServiceReducer'

const FormServices = () => {
	const [state, dispatch] = useReducer(FormServiceReducer, initialServiceForm)
	const HandleSubmit = e => {
		e.preventDefault()
		console.log(state)
		dispatch({ type: types.initialState })
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Tipo de Servicio */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Ingrese el Tipo de Servicio</h3>
						<input
							autoFocus
							type='text'
							placeholder='Servicio'
							value={state.service}
							onChange={e =>
								dispatch({
									type: types.onChangeService,
									payload: e.target.value,
								})
							}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* Precio del servicio */}
				<div className=''>
					<h3>Precio</h3>
					<p className='w-full border border-black/30 rounded-md px-4 py-2'>
						{'S/10.00'}
					</p>
				</div>

				{/* Fecha del servicio */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Ingrese la fecha del Servicio</h3>
						<input
							type='datetime-local'
							placeholder='nombre'
							value={state.date_service}
							onChange={e =>
								dispatch({ type: types.onChangeDate, payload: e.target.value })
							}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* Cliente */}
				<div className=''>
					<h3>DNI de cliente</h3>
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

				<div>
					<h3>Cliente</h3>
					<p className='w-full border border-black/30 rounded-md px-4 py-2'>
						{'Juan'}
					</p>
				</div>

				{/* Mascota de cliente */}
				<div className=''>
					<h3>Elija mascota del cliente</h3>
					<select
						value={state.pet_client}
						onChange={e =>
							dispatch({ type: types.onChangePet, payload: e.target.value })
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					>
						<option value=''>eliga la mascota</option>
						<option value='1'>yoshi</option>
					</select>
				</div>
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

export default FormServices

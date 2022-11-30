import { useReducer } from 'react'

const types = {
	onChangeService: 'on-change-service',
	onChangeDate: 'on-change-date',
	onChangeDNI: 'on-change-dni',
	onChangePet: 'on-change-pet',
}

const reducerForm = (state, { type, payload }) => {
	switch (type) {
		case types.onChangeService:
			return {
				...state,
				service: payload
			}
		case types.onChangeDate:
			return {
				...state,
				date_service: payload
			}
		case types.onChangeDNI:
			return {
				...state,
				dni_client: payload
			}
		case types.onChangePet:
			return {
				...state,
				pet_client: payload
			}
		default:
			return state
	}
}

const initialForm = {
	service: '',
	date_service: '',
	dni_client: '',
	pet_client: '',
}

const FormServices = () => {
	const [state, dispatch] = useReducer(reducerForm, initialForm)

	const HandleSubmit = e => {
		e.preventDefault()

		console.log(state)
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Tipo de Servicio */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Ingrese el Tipo de Servicio</h3>
						<input
							type='text'
							value={state.service}
							placeholder='Servicio'
							onChange={(e) => dispatch({ type: types.onChangeService, payload: e.target.value})}
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
							value={state.date_service}
							placeholder='nombre'
							onChange={(e) => dispatch({ type: types.onChangeDate, payload: e.target.value})}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* Cliente */}
				<div className=''>
					<h3>DNI de cliente</h3>
					<input
						type='text'
						value={state.dni_client}
						placeholder='DNI'
						onChange={(e) => dispatch({ type: types.onChangeDNI, payload: e.target.value})}
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
						onChange={(e) => dispatch({ type: types.onChangePet, payload: e.target.value})}
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

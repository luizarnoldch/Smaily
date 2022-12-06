import { useReducer } from 'react'
import FormMasterReducer, {
	types,
	initialMasterForm,
} from '../../reducers/FormMasterReducer'

const FormMaster = () => {
	const [state, dispatch] = useReducer(FormMasterReducer, initialMasterForm)
	const HandleSubmit = e => {
		e.preventDefault()
		console.log(state)
		dispatch({ type: types.initialState })
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Nombre Servicio */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Nombre de Servicio</h3>
						<input
							autoFocus
							type='text'
							value={state.nombre_servicio}
							placeholder='Nombre(s)'
							onChange={e =>
								dispatch({
									type: types.onChangeServiceName,
									payload: e.target.value,
								})
							}
							className='w-full border border-black/30 rounded-md px-4 py-2'
						/>
					</label>
				</div>

				{/* Costo de Servicio */}
				<div className=''>
					<h3>Costo de Servicio</h3>
					<input
						type='text'
						value={state.costo_servicio}
						placeholder='Costo'
						onChange={e =>
							dispatch({
								type: types.onChangeServiceCost,
								payload: e.target.value,
							})
						}
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>

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

export default FormMaster

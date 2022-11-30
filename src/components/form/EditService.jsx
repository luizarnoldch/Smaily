import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../../context/FormContext'
import { types } from '../../reducers/FormReducer'

const FormServices = () => {
	const store = useFormServiceState()
	const dispatch = useFormServiceDispatch()
	const { service } = store
	const { id } = service

	const HandleSubmit = e => {
		e.preventDefault()
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
							placeholder='Servicio'
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
						className='w-full border border-black/30 rounded-md px-4 py-2'
					/>
				</div>

				<div>
					<h3>Cliente</h3>
					<p className='w-full border border-black/30 rounded-md px-4 py-2'>
						{'Juan'} {id}
					</p>
				</div>

				{/* Mascota de cliente */}
				<div className=''>
					<h3>Elija mascota del cliente</h3>
					<select
						name=''
						id=''
						className='w-full border border-black/30 rounded-md px-4 py-2'
					>
						<option value=''></option>
					</select>
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

export default FormServices

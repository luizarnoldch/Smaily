import axios from 'axios'
import { useState, useEffect } from  'react'
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormServiceState } from '../../context/FormContext'
import FormClientReducer, {
	types
} from '../../reducers/FormClientReducer'

const initialData = {
	loading: true,
	data: undefined,
	error: undefined,
}

const EditClient = () => {
	const store = useFormServiceState()
	const { client } = store
	const { id } = client
	const navigate = useNavigate()
	const [fetch, setFetch] = useState(initialData)
	const [state, dispatch] = useReducer(FormClientReducer)

	const fetchTable = async () => {
		setFetch(initialData)
		try {
			const url = `http://localhost:4000/cliente/${id}`
			const res = await axios.get(url)
			setFetch({...fetch, data: res.data, loading: false})
		} catch (e) {
			setFetch({...fetch, error: e.message})
		}
	}

	useEffect(() => {
		fetchTable()
		return () => {
			setFetch(initialData)
		}
	},[id])
	
	
	const HandleSubmit = async e => {
		e.preventDefault()
		
		let id_cliente = fetch.data[0].id_cliente
		let nombre_cliente = state?.nombre_cliente ?? fetch.data[0].nombre_cliente
		let apellido_cliente = state?.apellido_cliente ?? fetch.data[0].apellido_cliente
		let dni_cliente = state?.dni_cliente ?? fetch.data[0].dni_cliente
		let telefono_cliente =  state?.telefono_cliente ?? fetch.data[0].telefono_cliente

		const post = {
			nombre_cliente,
			apellido_cliente,
			dni_cliente,
			telefono_cliente,
		}

		const postData = async (post,id) => {
			const url = `http://localhost:4000/cliente/${id}`
			await axios.put(url, post)
		}
		await postData(post, id_cliente)
		navigate(0)
	}

	if (fetch.loading){
		return <>Loading..</>
	}

	if (fetch.error){
		return <>Error..</>
	}

	return (
		<div className='p-4 shadow-md  rounded-md mb-4'>
			<form onSubmit={e => HandleSubmit(e)} className='grid grid-cols-3 gap-10'>
				{/* Nombre Cliente */}
				<div className=''>
					<label htmlFor='' className='flex flex-col'>
						<h3>Nombre(s) </h3>
						<input
							autoFocus
							type='text'
							defaultValue={fetch.data[0].nombre_cliente}
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
						defaultValue={fetch.data[0].apellido_cliente}
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
						defaultValue={fetch.data[0].dni_cliente}
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
						defaultValue={fetch.data[0].telefono_cliente}
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
						className='w-full bg-marron rounded-md px-4 py-2 hover:bg-marron/50 active:bg-marron/70'
					>
						Editar
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditClient

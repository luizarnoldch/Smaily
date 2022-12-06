const types = {
	onChangeName: 'on-change-name',
	onChangeLastName: 'on-change-last-name',
	onChangeDNI: 'on-change-dni',
	onChangeNumber: 'on-change-number',
	onSetInitial: 'on-set-initial',
	initialState: 'initialState',
}

const initialClientForm = {
	nombre_cliente: '',
	apellido_cliente: '',
	dni_cliente: '',
	telefono_cliente: '',
}

const FormClientReducer = (state, { type, payload }) => {
	switch (type) {
		case types.onChangeName:
			return {
				...state,
				nombre_cliente: payload,
			}
		case types.onChangeLastName:
			return {
				...state,
				apellido_cliente: payload,
			}
		case types.onChangeDNI:
			return {
				...state,
				dni_cliente: payload,
			}
		case types.onChangeNumber:
			return {
				...state,
				telefono_cliente: payload,
			}
		case types.onSetInitial:
			return payload
		case types.initialState:
			return initialClientForm
		default:
			return state
	}
}

export { initialClientForm, types }
export default FormClientReducer

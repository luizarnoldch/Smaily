const types = {
	onChangeName: 'on-change-name',
	onChangeLastName: 'on-change-last-name',
	onChangeDNI: 'on-change-dni',
	onChangeNumber: 'on-change-number',
	initialState: 'initialState',
}

const initialClientForm = {
	name_client: '',
	last_name_client: '',
	dni_client: '',
	number_client: '',
}

const FormClientReducer = (state, { type, payload }) => {
	switch (type) {
		case types.onChangeName:
			return {
				...state,
				name_client: payload,
			}
		case types.onChangeLastName:
			return {
				...state,
				last_name_client: payload,
			}
		case types.onChangeDNI:
			return {
				...state,
				dni_client: payload,
			}
		case types.onChangeNumber:
			return {
				...state,
				number_client: payload,
			}
		case types.initialState:
			return initialClientForm
		default:
			return state
	}
}

export { initialClientForm, types }
export default FormClientReducer

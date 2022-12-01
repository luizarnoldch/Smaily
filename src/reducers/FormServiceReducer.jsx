const types = {
	onChangeService: 'on-change-service',
	onChangeDate: 'on-change-date',
	onChangeDNI: 'on-change-dni',
	onChangePet: 'on-change-pet',
	initialState: 'initialState',
}

const initialServiceForm = {
	service: '',
	date_service: '',
	dni_client: '',
	pet_client: '',
}

const FormServiceReducer = (state, { type, payload }) => {
	switch (type) {
		case types.onChangeService:
			return {
				...state,
				service: payload,
			}
		case types.onChangeDate:
			return {
				...state,
				date_service: payload,
			}
		case types.onChangeDNI:
			return {
				...state,
				dni_client: payload,
			}
		case types.onChangePet:
			return {
				...state,
				pet_client: payload,
			}
		case types.initialState:
			return initialServiceForm
		default:
			return state
	}
}

export { initialServiceForm, types }
export default FormServiceReducer

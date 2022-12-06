const types = {
	onChangeServiceName: 'on-change-service-name',
	onChangeServiceCost: 'on-change-service-cost',
	initialState: 'initialState',
}

const initialMasterForm = {
	nombre_servicio: '',
	costo_servicio: '',
}

const FormClientReducer = (state, { type, payload }) => {
	switch (type) {
		case types.onChangeServiceName:
			return {
				...state,
				nombre_servicio: payload,
			}
		case types.onChangeServiceCost:
			return {
				...state,
				costo_servicio: payload,
			}
		case types.initialState:
			return initialMasterForm
		default:
			return state
	}
}

export { initialMasterForm, types }
export default FormClientReducer

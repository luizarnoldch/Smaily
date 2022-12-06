const types = {
	onChangePetName: 'on-change-pet-name',
	onChangeClientName: 'on-change-client-name',
	initialState: 'initialState',
}

const initialPetForm = {
	name_pet: '',
	name_client: '',
}

const FormClientReducer = (state, { type, payload }) => {
	switch (type) {
		case types.onChangePetName:
			return {
				...state,
				name_pet: payload,
			}
		case types.onChangeClientName:
			return {
				...state,
				name_client: payload,
			}
		case types.initialState:
			return initialPetForm
		default:
			return state
	}
}

export { initialPetForm, types }
export default FormClientReducer

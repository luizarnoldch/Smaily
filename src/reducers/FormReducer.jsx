const types = {
	ChangeFormServiceState: 'change-form-service-state',
	ChangeIDService: 'change-id-service',
	ChangeFormClientState: 'change-form-client-state',
	ChangeIDClient: 'change-id-client',
	ChangeFormPetState: 'change-form-pet-state',
	ChangeIDPet: 'change-id-pet',
	ChangeFormMasterState: 'change-form-master-state',
	ChangeIDMaster: 'change-id-master',
}

const initialForm = {
	service: {
		visible: false,
		id: null,
	},
	client: {
		visible: false,
		id: null,
	},
	pet: {
		visible: false,
		id: null,
	},
	master: {
		visible: false,
		id: null,
	},
}

const FormReducer = (state, { type, payload }) => {
	switch (type) {
		case types.ChangeFormServiceState:
			return {
				...state,
				service: {
					visible: !state.service.visible,
					id: null,
				},
			}
		case types.ChangeIDService:
			return {
				...state,
				service: {
					visible: true,
					id: payload,
				},
			}
		case types.ChangeFormClientState:
			return {
				...state,
				client: {
					visible: !state.client.visible,
					id: null,
				},
			}
		case types.ChangeIDClient:
			return {
				...state,
				client: {
					visible: true,
					id: payload,
				},
			}
		case types.ChangeFormPetState:
			return {
				...state,
				pet: {
					visible: !state.pet.visible,
					id: null,
				},
			}
		case types.ChangeIDPet:
			return {
				...state,
				pet: {
					visible: true,
					id: payload,
				},
			}
		case types.ChangeFormMasterState:
			return {
				...state,
				master: {
					visible: !state.master.visible,
					id: null,
				},
			}
		case types.ChangeIDMaster:
			return {
				...state,
				master: {
					visible: true,
					id: payload,
				},
			}
		default:
			return state
	}
}

export { initialForm, types }
export default FormReducer

import { createContext, useReducer, useContext } from 'react'
import FormReducer, { initialForm } from '../reducers/FormReducer'

const FormContext = createContext()

const FormContextProvider = ({ children }) => {
	return (
		<FormContext.Provider value={useReducer(FormReducer, initialForm)}>
			{children}
		</FormContext.Provider>
	)
}

const useFormServiceState = () => useContext(FormContext)[0]
const useFormServiceDispatch = () => useContext(FormContext)[1]

export { FormContext, useFormServiceState, useFormServiceDispatch }
export default FormContextProvider

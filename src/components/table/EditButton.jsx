import {
	useFormServiceState,
	useFormServiceDispatch,
} from '../../context/FormContext'
import { types } from '../../reducers/FormReducer'
import { AiOutlineEdit } from 'react-icons/ai'



const EditButton = ({type,item}) => {
	const dispatch = useFormServiceDispatch()

  const handleEdit = () => {
    switch(type){
      case 'service':
        return dispatch({
          type: types.ChangeIDService,
          payload: item.servicio,
        })
      case 'client':
        return dispatch({
          type: types.ChangeIDClient,
          payload: item.cliente,
        })
      case 'pet':
        return dispatch({
          type: types.ChangeIDPet,
          payload: item.mascota,
        })
      default:
         return
    }
  }

  return (
    <button
      type='button'
      onClick={() =>
        handleEdit()
      }
      className='rounded-full hover:bg-blue-200 active:bg-blue-400 flex-center w-8 h-8 text-2xl text-blue-500'
    >
      <AiOutlineEdit />
    </button>
  )
}

export default EditButton
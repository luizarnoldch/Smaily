import { BsTrash } from 'react-icons/bs'

const DeleteButton = ({type}) => {
  return (
    <button
      type='button'
      className='rounded-full hover:bg-red-200 active:bg-red-400 flex-center w-8 h-8 text-2xl text-red-500'
    >
      <BsTrash />
    </button>
  )
}

export default DeleteButton
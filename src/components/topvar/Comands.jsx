//import { useContext } from "react"
//import UserContext from "../../context/UserContext"

const Comands = () => {
  console.log('Comands component')

  //const { user } = useContext(UserContext)

  const user = {
    name: 'arnold'
  }

  return (
    <div>
      <h2>{ user ? `Hola ${user.name}` : 'Bienvenido'}</h2>
    </div>
  )
}

export default Comands
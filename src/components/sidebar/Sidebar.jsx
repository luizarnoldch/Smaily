import './sidebar.css'

import {Link} from "react-router-dom"

const routes = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Clientes',
    route: '/cliente'
  },
  {
    label: 'Mascotas',
    route: '/mascota'
  },
  {
    label: 'Horarios',
    route: '/horario'
  }
]

const Sidebar = () => {
  console.log('Sidebar component')
  return (
    <header className="header">
      <nav className='sidebar'>
        <ul className='sidebar--list'>
          {
            routes.map(({label, route}) => (
              <li key={route}>
                <Link to={route}>
                  <div className='sidebar--item'>
                    {label}
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar
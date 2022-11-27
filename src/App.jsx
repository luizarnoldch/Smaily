import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Layout from './Laoyout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>Index</>
      },
      {
        path: "/cliente",
        element: <>Clientes</>
      },
      {
        path: "/mascota",
        element: <>Mascotas</>
      },
      {
        path: "/horario",
        element: <>Horario</>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

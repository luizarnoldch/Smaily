import {
  Outlet,
} from "react-router-dom"

import Sidebar from "./components/sidebar/Sidebar"
import Topvar from "./components/topvar/Topvar"

const Layout = () => {
  return (<div className="w-screen h-screen flex">
    <div className="w-1/12">
      <Sidebar />
    </div>
    <div className="w-11/12">
      <Topvar />
      <Outlet />
    </div>
  </div>)
}

export default Layout
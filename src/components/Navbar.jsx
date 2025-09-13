import { NavLink } from 'react-router-dom'
import { FaHome, FaTasks } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="flex justify-center gap-10 py-4 bg-blue-700 text-white shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 transition ${
            isActive ? 'bg-blue-900' : ''
          }`
        }
      >
        <FaHome /> Casa
      </NavLink>
      <NavLink
        to="/tareas"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 transition ${
            isActive ? 'bg-blue-900' : ''
          }`
        }
      >
        <FaTasks /> Tareas por Semana
      </NavLink>
    </nav>
  )
}

export default Navbar
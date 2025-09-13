import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp, FaGithub, FaDownload, FaEye } from 'react-icons/fa'

function SemanaCard({ numero }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded shadow">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer text-lg font-semibold"
      >
        <span>Semana {numero}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <div className="mt-4 space-y-2">
          <Link
            to={`/tareas/semana/${numero}`}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaEye /> Ver contenido
          </Link>
          <button
            onClick={() => alert('Aquí iría la lógica para descargar archivo')}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <FaDownload /> Descargar
          </button>
          <a
            href={`https://github.com/tuusuario/tu-repo/semana-${numero}`} // Reemplaza con tu URL real
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            <FaGithub /> Ver en GitHub
          </a>
        </div>
      )}
    </div>
  )
}

export default SemanaCard
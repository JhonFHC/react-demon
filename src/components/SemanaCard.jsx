import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp, FaGithub, FaDownload, FaEye } from 'react-icons/fa'

function SemanaCard({ numero }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer text-lg font-semibold text-blue-700 hover:text-blue-900 transition"
      >
        <span className="flex items-center gap-2">
          Semana {numero}
        </span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <div className="mt-4 space-y-2 animate-fade-in">
          <Link
            to={`/tareas/semana/${numero}`}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <FaEye /> Ver contenido
          </Link>
          <button
            onClick={() => alert('Aquí iría la lógica para descargar archivo')}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            <FaDownload /> Descargar
          </button>
          <a
            href={`https://github.com/jhonfhc/react-demon/tree/main/semana-${numero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            <FaGithub /> Ver en GitHub
          </a>
        </div>
      )}
    </div>
  )
}

export default SemanaCard
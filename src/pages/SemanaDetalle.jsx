import { useParams } from 'react-router-dom'

function SemanaDetalle() {
  const { numero } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        “El conocimiento es poder.” – Francis Bacon
      </h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Contenido Semana {numero}</h2>
        <p className="text-gray-700">
          Aquí va toda la descripción de la tarea de la semana {numero}. Puedes incluir listas, imágenes, código, etc.
        </p>
        <div className="mt-4">
          {/* Espacio para futura imagen */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
            Imagen opcional aquí
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemanaDetalle
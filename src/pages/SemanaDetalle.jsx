import { useParams } from 'react-router-dom'

function SemanaDetalle() {
  const { numero } = useParams()

  if (numero !== '1') {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Contenido de la semana {numero}
        </h1>
        <p className="text-gray-600">Contenido aún no disponible. Pronto lo subiré.</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-10">
      {/* Frase célebre */}
      <h1 className="text-2xl font-bold text-center">
        “El conocimiento es poder.” – Francis Bacon
      </h1>

      {/* 🔹 Sección 1: Explicación de GIT */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold text-blue-600">¿Qué es GIT?</h2>
        <p className="text-gray-800 text-justify">
          GIT es un sistema de control de versiones (SCV), el cual guarda de un proyecto los cambios que realizaste, en algo llamado historial de versiones (¿Quién? ¿Por qué?). Cabe aclarar que es ligeramente diferente a guardar; ya que un proyecto lo guardas, cierras y lo vuelves a abrir empezaras desde el último guardado; no puedes retroceder.
        </p>
        <p className="text-gray-800 text-justify">
          Por ejemplo: El código nuevo implementado en un proyecto guardado no funciona y malogró el proyecto; no puedes retroceder, y aquí hace presencia GIT ya que no solo guarda, sino que lo almacena en el historial de versiones...
        </p>

        <p className="text-gray-800 text-justify">
          GIT permite trabajar sin conexión y luego sincronizar cambios. También permite que varios usuarios trabajen simultáneamente sin sobrescribirse.
        </p>

        <p className="text-gray-800 text-justify">
          Un <strong>repositorio</strong> es una carpeta que contiene archivos del proyecto y el historial de versiones. GIT guarda <strong>snapshots</strong> del proyecto si hubo cambios, no versiones completas.
        </p>

        <ul className="list-disc list-inside text-gray-800 ml-4">
          <li><strong>Working Directory:</strong> Donde editas tu proyecto.</li>
          <li><strong>Staging Area:</strong> Prepara los cambios a guardar.</li>
          <li><strong>Repositorio:</strong> Donde se almacenan los snapshots.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">¿Qué es una rama (branch)?</h3>
        <p className="text-gray-800 text-justify">
          Las ramas en GitHub permiten crear líneas separadas del proyecto principal para experimentar, probar nuevas ideas y luego unirlas nuevamente sin afectar el código original.
        </p>
      </section>

      {/* 🔹 Sección 2: PDF/Word - Creación de cuenta GitHub */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold text-green-600">Guía: Crear una cuenta en GitHub</h2>
        <p className="text-gray-800">
          Descarga aquí el documento paso a paso en formato Word o PDF:
        </p>
        <a
          href="public/docs/Manual de Como crear una cuenta en GIT-HUB.docx"
          download
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Descargar WORD
        </a>
      </section>

      {/* 🔹 Sección 3: Proyecto Java (NetBeans) */}
      <section className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold text-purple-600">Proyecto Java (NetBeans)</h2>
        <p className="text-gray-800">
          Aquí encontrarás el código fuente de mi aplicación Java hecha con NetBeans (Maven).
        </p>
        <a
          href="/docs/java-proyecto.zip" // 👉 Reemplaza por tu ruta real del .zip
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Descargar Código (.zip)
        </a>

        <p className="text-gray-800">
          Además, puedes ver el documento con el paso a paso del proyecto:
        </p>
        <a
          href="public/docs/Taller Aplicaciones - Semana1.docx" // 👉 Reemplaza por tu ruta real
          download
          className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Descargar Word Explicativo
        </a>
      </section>
    </div>
  )
}

export default SemanaDetalle

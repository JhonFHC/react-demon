function Home() {
  return (
    <div className="p-8">
      {/* SECCIÓN SUPERIOR */}
      <section className="text-center mb-10">
        <div className="flex flex-col items-center gap-4">
          {/* Espacio para imagen */}
          <div className="w-32 h-32 bg-gray-300 rounded-full shadow-inner flex items-center justify-center text-gray-500 text-sm">
            Foto aquí
          </div>

          <h1 className="text-4xl font-bold text-blue-800 transition hover:text-blue-600">
            Juan Pérez
          </h1>
          <p className="text-xl mt-2 text-gray-700">Universidad Nacional de Ingeniería</p>
          <p className="text-lg mt-1 text-gray-600">Profesor: Dr. Juan Rodríguez</p>
        </div>
      </section>

      {/* SECCIÓN INFERIOR */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center bg-white p-6 rounded shadow-lg">
        <div className="hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Misión</h2>
          <p className="text-gray-700">
            Formar profesionales líderes con valores, conocimiento y compromiso social.
          </p>
        </div>
        <div className="hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">Visión</h2>
          <p className="text-gray-700">
            Ser una universidad reconocida por su excelencia académica, innovación e impacto.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
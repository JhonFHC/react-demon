function Home() {
  return (
    <div className="p-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Tu Nombre</h1>
        <p className="text-xl mt-2">Universidad Nacional de Ejemplo</p>
        <p className="text-lg mt-1 text-gray-600">Profesor: Dr. Ejemplo Apellido</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center bg-white p-6 rounded shadow">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Misión</h2>
          <p className="text-gray-700">
            Nuestra misión es formar profesionales líderes con valores, conocimiento y compromiso social.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Visión</h2>
          <p className="text-gray-700">
            Ser una universidad reconocida por su excelencia académica, innovación e impacto en la sociedad.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
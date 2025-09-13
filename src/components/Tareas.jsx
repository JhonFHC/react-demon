import SemanaCard from './SemanaCard'

function Tareas() {
  const semanas = [1, 2] // Más adelante agregarás hasta la 16

  return (
    <div className="p-6">
      <h2 className="text-center text-3xl font-bold mb-6">
        “El éxito es la suma de pequeños esfuerzos repetidos día tras día.” – Robert Collier
      </h2>
      <div className="space-y-4">
        {semanas.map((n) => (
          <SemanaCard key={n} numero={n} />
        ))}
      </div>
    </div>
  )
}

export default Tareas
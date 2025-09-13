import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tareas from './components/Tareas'
import SemanaDetalle from './pages/SemanaDetalle'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/tareas/semana/:numero" element={<SemanaDetalle />} />
      </Routes>
    </div>
  )
}

export default App
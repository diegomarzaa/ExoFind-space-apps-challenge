import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, CheckCircle, Star } from 'lucide-react'

const niveles = [
  {
    tipo: "Terrestres",
    nombre: "Exploración Terrestre",
    imagen: "https://via.placeholder.com/300?text=Terrestres",
    objetivos: [
      "Analizar la composición atmosférica",
      "Buscar evidencias de agua líquida",
      "Estudiar la actividad geológica"
    ],
    desbloqueado: true
  },
  {
    tipo: "Super-Terrestres",
    nombre: "Gigantes Rocosos",
    imagen: "https://via.placeholder.com/300?text=Super-Terrestres",
    objetivos: [
      "Medir la gravedad superficial",
      "Investigar la estructura interna",
      "Evaluar el potencial de habitabilidad"
    ],
    desbloqueado: false
  },
  {
    tipo: "Neptunianos",
    nombre: "Mundos Gaseosos",
    imagen: "https://via.placeholder.com/300?text=Neptunianos",
    objetivos: [
      "Analizar la composición de las nubes",
      "Estudiar los patrones climáticos",
      "Buscar lunas potencialmente habitables"
    ],
    desbloqueado: false
  },
  {
    tipo: "Gigantes Gaseosos",
    nombre: "Titanes del Cosmos",
    imagen: "https://via.placeholder.com/300?text=Gigantes+Gaseosos",
    objetivos: [
      "Mapear los sistemas de anillos",
      "Investigar las tormentas atmosféricas",
      "Estudiar la magnetosfera del planeta"
    ],
    desbloqueado: false
  }
]

export default function SelectorDeNiveles() {
  const [nivelSeleccionado, setNivelSeleccionado] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="z-10 text-center space-y-8 px-4 w-full max-w-6xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Selector de Misiones
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niveles.map((nivel, index) => (
            <motion.div
              key={nivel.tipo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-black bg-opacity-50 p-4 rounded-lg border-2 ${
                nivel.desbloqueado ? 'border-white' : 'border-gray-600'
              } cursor-pointer`}
              onClick={() => nivel.desbloqueado && setNivelSeleccionado(index)}
            >
              <img src={nivel.imagen} alt={nivel.tipo} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">{nivel.nombre}</h2>
              <p className="text-gray-300 mb-4">{nivel.tipo}</p>
              {!nivel.desbloqueado && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
                  <Lock className="w-16 h-16 text-gray-400" />
                </div>
              )}
              {nivel.desbloqueado && index === nivelSeleccionado && (
                <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
                  <Star className="w-6 h-6 text-black" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border-2 border-white mt-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Objetivos de la Misión</h3>
          <ul className="text-left space-y-2">
            {niveles[nivelSeleccionado].objetivos.map((objetivo, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center text-white"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                <span>{objetivo}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700 transition-colors"
        >
          Iniciar Misión
        </motion.button>
      </div>
    </div>
  )
}
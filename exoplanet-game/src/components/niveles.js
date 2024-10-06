import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, CheckCircle, Star, Rocket, Droplet, Shield, Cpu } from 'lucide-react'
import React from 'react'

import foodImage from '../img/food.png';
import energyImage from '../img/energy.png';
import materialsImage from '../img/materials.png';
import techImage from '../img/tech.png';

const niveles = [
  {
    tipo: "Terrestres",
    nombre: "Alimentos",
    planeta: "KEPLER 452-B",
    distancia: "1402 años luz",
    imagen: foodImage,
    objetivos: [
      "Analizar la composición del suelo para cultivos",
      "Buscar fuentes de agua potable",
      "Establecer invernaderos para producción de alimentos"
    ],
    desbloqueado: true,
    icono: Droplet
  },
  {
    tipo: "Gigantes Gaseosos",
    nombre: "Combustible",
    planeta: "WASP-121b",
    distancia: "858 años luz",
    imagen: energyImage,
    objetivos: [
      "Recolectar hidrógeno de la estratosfera",
      "Analizar la composición atmosférica",
      "Desarrollar tecnología de extracción segura"
    ],
    desbloqueado: false,
    icono: Rocket
  },
  {
    tipo: "Super-Terrestres",
    nombre: "Materiales",
    planeta: "HD 3167 b",
    distancia: "154 años luz",
    imagen: materialsImage,
    objetivos: [
      "Extraer materiales para reforzar la nave",
      "Estudiar la composición geológica",
      "Desarrollar técnicas de minería espacial"
    ],
    desbloqueado: false,
    icono: Shield
  },
  {
    tipo: "Neptunianos",
    nombre: "Tecnología",
    planeta: "HAT-P-11 b",
    distancia: "123 años luz",
    imagen: techImage,
    objetivos: [
      "Investigar fenómenos atmosféricos avanzados",
      "Buscar elementos raros para tecnología avanzada",
      "Desarrollar sistemas de propulsión mejorados"
    ],
    desbloqueado: false,
    icono: Cpu
  }
]

export default function SelectorDeMisiones() {
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
          Misiones Exoplanetarias
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
              onClick={() => setNivelSeleccionado(index)}
            >
              <img src={nivel.imagen} alt={nivel.planeta} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">{nivel.nombre}</h2>
              <p className="text-gray-300 mb-1">{nivel.planeta}</p>
              <p className="text-sm text-gray-400 mb-4">{nivel.distancia}</p>
              {!nivel.desbloqueado && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-lg">
                  <Lock className="w-16 h-16 text-gray-400" />
                </div>
              )}
              {index === nivelSeleccionado && (
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold text-white">Objetivos de la Misión</h3>
            <div className="flex items-center space-x-2">
            {React.createElement(niveles[nivelSeleccionado].icono, { className: "w-8 h-8 text-blue-400" })}              <span className="text-xl font-semibold text-blue-400">{niveles[nivelSeleccionado].nombre}</span>
            </div>
          </div>
          <ul className="text-left space-y-2">
            {niveles[nivelSeleccionado].objetivos.map((objetivo, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center text-white"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
                <span>{objetivo}</span>
              </motion.li>
            ))}
          </ul>
          {!niveles[nivelSeleccionado].desbloqueado && (
            <p className="mt-4 text-yellow-400 font-semibold">
              Esta misión está bloqueada. Complete las misiones anteriores para desbloquearla.
            </p>
          )}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-8 px-8 py-3 text-white text-xl font-bold rounded-full transition-colors ${
            niveles[nivelSeleccionado].desbloqueado
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
          disabled={!niveles[nivelSeleccionado].desbloqueado}
        >
          {niveles[nivelSeleccionado].desbloqueado ? 'Iniciar Misión' : 'Misión Bloqueada'}
        </motion.button>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Star, Rocket, Droplet, Shield, Cpu } from 'lucide-react';

// Imágenes de cada misión
import foodImage from '../img/food.png';
import energyImage from '../img/energy.png';
import materialsImage from '../img/materials.png';
import techImage from '../img/tech.png';

// Datos de las misiones
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
];

export default function SelectorDeMisiones() {
  // Estado para guardar la misión seleccionada (por defecto, la primera)
  const [nivelSeleccionado, setNivelSeleccionado] = useState(0);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      {/* Overlay oscuro para mejorar el contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenedor principal del contenido */}
      <div className="z-10 text-center space-y-8 px-4 w-full max-w-6xl">
        
        {/* Título principal */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut', delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Misiones Exoplanetarias
        </motion.h1>

        {/* Grid de tarjetas de misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niveles.map((nivel, index) => (
            <motion.div
              key={nivel.tipo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.07,
                boxShadow: nivel.desbloqueado
                  ? "0 0 30px rgba(0, 255, 255, 0.3)"
                  : "0 0 10px rgba(100, 100, 100, 0.2)",
                borderColor: nivel.desbloqueado ? "#38bdf8" : "#555"
              }}
              className={`relative bg-black bg-opacity-50 p-4 rounded-lg border-2 ${
                nivel.desbloqueado ? 'border-white hover:border-cyan-400' : 'border-gray-600 hover:border-gray-500'
              } cursor-pointer transform hover:scale-105 transition duration-100 ease-out hover:shadow-lg`}
              onClick={() => setNivelSeleccionado(index)}
              >
              <img
                src={nivel.imagen}
                alt={nivel.planeta}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-white mb-1">{nivel.nombre}</h2>
              <p className="text-gray-300 text-sm">{nivel.planeta}</p>
              <p className="text-xs text-gray-400 mb-2">{nivel.distancia}</p>

              {/* Cubre la tarjeta si la misión está bloqueada */}
              {!nivel.desbloqueado && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
                  <Lock className="w-16 h-16 text-gray-400" />
                </div>
              )}

              {/* Indicador de selección */}
              {index === nivelSeleccionado && (
                <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
                  <Star className="w-6 h-6 text-black" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Panel de detalles de la misión seleccionada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black bg-opacity-50 p-6 rounded-xl border border-white mt-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold text-white">Objetivos de la Misión</h3>
            <div className="flex items-center space-x-2">
              {/* Renderiza dinámicamente el icono definido para la misión */}
              {React.createElement(niveles[nivelSeleccionado].icono, { className: "w-8 h-8 text-blue-400" })}
              <span className="text-xl font-semibold text-blue-400">
                {niveles[nivelSeleccionado].nombre}
              </span>
            </div>
          </div>
          <ul className="text-left space-y-2">
            {niveles[nivelSeleccionado].objetivos.map((objetivo, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center text-white text-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
                <span>{objetivo}</span>
              </motion.li>
            ))}
          </ul>

          {/* Mensaje si la misión está bloqueada */}
          <motion.div
            initial={false}
            animate={{ height: niveles[nivelSeleccionado].desbloqueado ? 0 : 'auto' }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <p
              className={`text-yellow-400 font-semibold text-sm text-center transition-opacity duration-300 ${
                niveles[nivelSeleccionado].desbloqueado ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Esta misión está bloqueada. Completa misiones previas para desbloquearla.
            </p>
          </motion.div>
        </motion.div>

        {/* Iniciar misión */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-8 px-8 py-3 text-white text-xl font-bold rounded-full transition-colors duration-300 ${
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
  );
}

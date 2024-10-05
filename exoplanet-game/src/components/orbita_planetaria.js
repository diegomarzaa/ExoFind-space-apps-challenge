"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Component() {
  const [isEclipsing, setIsEclipsing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsEclipsing(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative w-80 h-80 rounded-full bg-gray-900 border-4 border-gray-700 overflow-hidden">
        {/* Estrellas de fondo (aumentamos el tamaño) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full bg-yellow-200"
          animate={{ opacity: isEclipsing ? 0.6 : 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-yellow-200" />
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-yellow-200" />
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-yellow-200" />

        {/* Planeta (más pequeño que las estrellas y sigue su recorrido) */}
        <motion.div
        className="absolute w-6 h-6 rounded-full bg-gray-800 opacity-80"
        initial={{ top: "10%", left: "-10%" }}
        animate={{ top: "30%", left: "110%" }}  // El planeta ahora sigue moviéndose fuera de la pantalla
        transition={{ duration: 6, ease: "linear", delay: 2 }}  // Ajustamos la duración para que el movimiento sea más continuo
        />


        {/* Efecto de viñeta */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black opacity-50" />
      </div>
    </div>
  )
}

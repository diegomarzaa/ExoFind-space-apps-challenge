import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Settings, User, Trophy, HelpCircle, Volume2 } from 'lucide-react'

export default function Component() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 200 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
      }))
    }
    setStars(generateStars())
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
      <div className="z-10 text-center space-y-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl font-bold text-white mb-12 tracking-wider"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ODISEA ESTELAR
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <button className="text-5xl font-bold py-6 px-24 bg-transparent border-4 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full tracking-widest"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}>
            JUGAR
          </button>
        </motion.div>
        <div className="flex justify-center space-x-12">
          {[
            { icon: User, label: "Perfil" },
            { icon: Trophy, label: "Logros" },
            { icon: Settings, label: "Ajustes" },
            { icon: HelpCircle, label: "Ayuda" },
            { icon: Volume2, label: "Sonido" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <button className="group flex flex-col items-center">
                <item.icon className="w-10 h-10 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="mt-2 text-white text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

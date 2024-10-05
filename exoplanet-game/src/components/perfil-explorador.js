import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Trophy, Star, Target, Zap, Rocket, Book } from 'lucide-react'

export default function Profile() {
  const [stars, setStars] = useState([])
  const [activeTab, setActiveTab] = useState('info')

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 300 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 2 + 1,
      }))
    }
    setStars(generateStars())
  }, [])

  const missions = [
    { name: "Explorador Novato", description: "Completa tu primera misión de exploración", progress: 100, reward: "100 XP" },
    { name: "Cartógrafo Estelar", description: "Mapea 5 sistemas estelares", progress: 60, reward: "500 XP" },
    { name: "Diplomático Galáctico", description: "Establece alianzas con 3 especies alienígenas", progress: 33, reward: "1000 XP" },
    { name: "Piloto Experto", description: "Completa 10 maniobras de vuelo avanzadas", progress: 70, reward: "750 XP" },
    { name: "Científico Cuántico", description: "Descifra los misterios de un agujero negro", progress: 20, reward: "2000 XP" }
  ]

  const achievements = [
    { name: "Primer Contacto", description: "Descubre una nueva forma de vida", icon: Star },
    { name: "Navegante Estelar", description: "Visita 50 sistemas solares", icon: Rocket },
    { name: "Sabio del Cosmos", description: "Alcanza el nivel 50 en conocimientos astronómicos", icon: Book },
    { name: "Héroe Intergaláctico", description: "Salva una civilización de la extinción", icon: Trophy },
    { name: "Pionero del Hiperespacio", description: "Realiza 100 saltos hiperespaciales", icon: Zap }
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2811&q=80')] bg-cover bg-center">
      {/* Starfield Background with Twinkling Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{ opacity: [0.3, star.opacity, 0.3] }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="z-10 text-center space-y-8 px-4 w-full max-w-4xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Perfil del Explorador
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg border border-white border-opacity-20"
        >
          <div className="flex justify-center space-x-8 mb-8">
            {['info', 'misiones', 'logros'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'info' && (
            <div className="text-white">
              <div className="flex items-center justify-center mb-6">
                <img src="/placeholder.svg?height=100&width=100" alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white" />
                <div className="ml-6 text-left">
                  <h2 className="text-3xl font-bold">Explorador Alpha</h2>
                  <p className="text-xl">Rango: Capitán Estelar</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">25</p>
                  <p className="text-lg">Nivel</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">18750 / 25000</p>
                  <p className="text-lg">XP</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">152</p>
                  <p className="text-lg">Misiones Completadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">7</p>
                  <p className="text-lg">Sistemas Descubiertos</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'misiones' && (
            <div className="space-y-4">
              {missions.map((mission, index) => (
                <motion.div
                  key={mission.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-4 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-white">{mission.name}</h3>
                  <p className="text-gray-300 mb-2">{mission.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${mission.progress}%` }}></div>
                  </div>
                  <p className="text-right text-gray-300 mt-1">Recompensa: {mission.reward}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'logros' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center"
                >
                  <achievement.icon className="w-10 h-10 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{achievement.name}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Additional Styles for Glowing Effects and Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
      `}</style>
    </div>
  )
}
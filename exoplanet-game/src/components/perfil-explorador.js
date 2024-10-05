import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Star, Zap, Rocket, Book, Globe, Atom, Brain, Heart } from 'lucide-react'
import frofilepic from '../img/pfp.png'

export default function Profile() {
  const [stars, setStars] = useState([])
  const [activeTab, setActiveTab] = useState('info')
  const [showLevelUpModal, setShowLevelUpModal] = useState(false)

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
    { name: "Primer Contacto", description: "Descubre una nueva forma de vida", icon: Star, obtained: true },
    { name: "Navegante Estelar", description: "Visita 50 sistemas solares", icon: Rocket, obtained: false },
    { name: "Sabio del Cosmos", description: "Alcanza el nivel 50 en conocimientos astronómicos", icon: Book, obtained: false },
    { name: "Héroe Intergaláctico", description: "Salva una civilización de la extinción", icon: Trophy, obtained: true },
    { name: "Pionero del Hiperespacio", description: "Realiza 100 saltos hiperespaciales", icon: Zap, obtained: false }
  ]

  const skills = [
    { name: "Pilotaje", level: 7, icon: Rocket, color: "text-blue-400" },
    { name: "Diplomacia", level: 5, icon: Heart, color: "text-pink-400" },
    { name: "Ciencia", level: 8, icon: Atom, color: "text-green-400" },
    { name: "Exploración", level: 6, icon: Globe, color: "text-yellow-400" },
    { name: "Estrategia", level: 4, icon: Brain, color: "text-purple-400" }
  ]

  const dailyChallenges = [
    { name: "Exploración Rápida", description: "Visita 3 nuevos planetas hoy", reward: "50 XP", completed: false },
    { name: "Diplomacia Diaria", description: "Interactúa con 2 especies alienígenas", reward: "30 XP", completed: true },
    { name: "Estudio Estelar", description: "Analiza 5 estrellas diferentes", reward: "40 XP", completed: false }
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
      <div className="z-10 text-center space-y-8 px-4 w-full max-w-6xl">
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
          <div className="flex justify-center space-x-4 mb-8">
            {['info', 'misiones', 'logros', 'habilidades', 'desafíos'].map((tab) => (
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
                <img src={frofilepic} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white" />
                <div className="ml-6 text-left">
                  <h2 className="text-3xl font-bold">Explorador Alpha</h2>
                  <p className="text-xl">Rango: Capitán Estelar</p>
                  <div className="mt-2 bg-white bg-opacity-20 rounded-full h-4 w-48">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm mt-1">Nivel 25 - 18750 / 25000 XP</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">152</p>
                  <p className="text-lg">Misiones Completadas</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">7</p>
                  <p className="text-lg">Sistemas Descubiertos</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-lg">Alianzas Formadas</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="text-3xl font-bold">12,345</p>
                  <p className="text-lg">Años Luz Viajados</p>
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
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-300">{mission.progress}% completado</p>
                    <p className="text-yellow-300">Recompensa: {mission.reward}</p>
                  </div>
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
                  className={`p-4 rounded-lg flex items-center ${
                    achievement.obtained ? 'bg-yellow-600 bg-opacity-20' : 'bg-white bg-opacity-10'
                  }`}
                >
                  <achievement.icon className={`w-10 h-10 mr-4 ${achievement.obtained ? 'text-yellow-400' : 'text-gray-400'}`} />
                  <div>
                    <h3 className="text-xl font-bold text-white">{achievement.name}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                  {achievement.obtained && (
                    <Star className="w-6 h-6 text-yellow-400 ml-auto" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'habilidades' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className={`w-8 h-8 ${skill.color} mr-2`} />
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2.5 mr-2">
                      <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${(skill.level / 10) * 100}%` }}></div>
                    </div>
                    <span className="text-white font-bold">{skill.level}/10</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'desafíos' && (
            <div className="space-y-4">
              {dailyChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-lg flex items-center ${
                    challenge.completed ? 'bg-green-600 bg-opacity-20' : 'bg-white bg-opacity-10'
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
                    <p className="text-gray-300">{challenge.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-300">{challenge.reward}</p>
                    {challenge.completed ? (
                      <span className="text-green-400">Completado</span>
                    ) : (
                      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                        Completar
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Level Up Modal */}
      <AnimatePresence>
        {showLevelUpModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-black bg-opacity-80 p-8 rounded-lg border-2 border-yellow-400 text-center">
              <h2 className="text-4xl font-bold text-yellow-400 mb-4">¡Nivel Alcanzado!</h2>
              <p className="text-2xl text-white mb-6">Has alcanzado el nivel 26</p>
              <p className="text-xl text-blue-300 mb-4">Desbloqueas: Mejora de Motor Estelar</p>
              <button
                onClick={() => setShowLevelUpModal(false)}
                className="px-6 py-3 bg-yellow-400 text-black rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors"
              >
                ¡Genial!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
// TODO: Skins y naves espaciales seccion

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Star, Zap, Rocket, Book, Globe, Atom, Brain, Heart, Lock, CheckCircle } from 'lucide-react'
import frofilepic from '../img/pfp.png'
import terrestreImg from '../img/terrestre.png'
import terrestreImgZ from '../img/terrestreZoom.png'
import superterrestreImg from '../img/superterrestre.png'
import neptunianoImg from '../img/neptunianos.png'
import giganteGaseosoImg from '../img/gaseoso.jpg'

import BackToHome from './BackToHome';
import PageWrapper from './PageWrapper'

import { useSettings } from '../context/SettingsContext'

// Definir URLs de imágenes para cada tipo de exoplaneta
const exoplanetImages = {
  'Terrestres': terrestreImg,
  'Super-Terrestres': superterrestreImg,
  'Neptunianos': neptunianoImg,
  'Gigantes Gaseosos': giganteGaseosoImg,
}

// Definir imágenes para planetas individuales (Placeholder)
const planetImages = {
  'KEPLER 452-B': terrestreImgZ,
  'Planeta B': 'https://via.placeholder.com/80?text=Planeta+B',
  'Planeta C': 'https://via.placeholder.com/80?text=Planeta+C',
  'Planeta D': 'https://via.placeholder.com/80?text=Planeta+D',
  'Planeta E': 'https://via.placeholder.com/80?text=Planeta+E',
  'Planeta F': 'https://via.placeholder.com/80?text=Planeta+F',
  'Planeta G': 'https://via.placeholder.com/80?text=Planeta+G',
  'Planeta H': 'https://via.placeholder.com/80?text=Planeta+H',
  'Planeta I': 'https://via.placeholder.com/80?text=Planeta+I',
  'Planeta J': 'https://via.placeholder.com/80?text=Planeta+J',
  'Planeta K': 'https://via.placeholder.com/80?text=Planeta+K',
  'Planeta L': 'https://via.placeholder.com/80?text=Planeta+L',
  'Planeta M': 'https://via.placeholder.com/80?text=Planeta+M',
  'Planeta N': 'https://via.placeholder.com/80?text=Planeta+N',
  'Planeta O': 'https://via.placeholder.com/80?text=Planeta+O',
  'Planeta P': 'https://via.placeholder.com/80?text=Planeta+P',
  'Planeta Q': 'https://via.placeholder.com/80?text=Planeta+Q',
  'Planeta R': 'https://via.placeholder.com/80?text=Planeta+R',
  'Planeta S': 'https://via.placeholder.com/80?text=Planeta+S',
  'Planeta T': 'https://via.placeholder.com/80?text=Planeta+T',
  'Planeta U': 'https://via.placeholder.com/80?text=Planeta+U',
  'Planeta V': 'https://via.placeholder.com/80?text=Planeta+V',
  'Planeta W': 'https://via.placeholder.com/80?text=Planeta+W',
  'Planeta X': 'https://via.placeholder.com/80?text=Planeta+X',
  'Planeta Y': 'https://via.placeholder.com/80?text=Planeta+Y',
  'Planeta Z': 'https://via.placeholder.com/80?text=Planeta+Z',
  'Planeta AA': 'https://via.placeholder.com/80?text=Planeta+AA',
  'Planeta AB': 'https://via.placeholder.com/80?text=Planeta+AB',
  'Planeta AC': 'https://via.placeholder.com/80?text=Planeta+AC',
  'Planeta AD': 'https://via.placeholder.com/80?text=Planeta+AD',
  'Planeta AE': 'https://via.placeholder.com/80?text=Planeta+AE',
  'Planeta AF': 'https://via.placeholder.com/80?text=Planeta+AF',
  'Planeta AG': 'https://via.placeholder.com/80?text=Planeta+AG',
  'Planeta AH': 'https://via.placeholder.com/80?text=Planeta+AH',
  'Planeta AI': 'https://via.placeholder.com/80?text=Planeta+AI',
  'Planeta AJ': 'https://via.placeholder.com/80?text=Planeta+AJ',
  'Planeta AK': 'https://via.placeholder.com/80?text=Planeta+AK',
  'Planeta AL': 'https://via.placeholder.com/80?text=Planeta+AL',
  'Planeta AM': 'https://via.placeholder.com/80?text=Planeta+AM',
  'Planeta AN': 'https://via.placeholder.com/80?text=Planeta+AN',
  'Planeta AO': 'https://via.placeholder.com/80?text=Planeta+AO',
  'Planeta AP': 'https://via.placeholder.com/80?text=Planeta+AP',
  'Planeta AQ': 'https://via.placeholder.com/80?text=Planeta+AQ',
  'Planeta AR': 'https://via.placeholder.com/80?text=Planeta+AR',
  'Planeta AS': 'https://via.placeholder.com/80?text=Planeta+AS',
}

export default function Profile() {
  const { settings } = useSettings()

  const [stars, setStars] = useState([])
  const [activeTab, setActiveTab] = useState('info')
  const [showLevelUpModal, setShowLevelUpModal] = useState(false)
  const [expandedDiscoveries, setExpandedDiscoveries] = useState({}) // Mapeo de tipos a estados de expansión
  const [dailyChallenges, setDailyChallenges] = useState([
    { name: "Exploración Rápida", description: "Visita 3 nuevos planetas hoy", reward: "50 XP", completed: false },
    { name: "Diplomacia Diaria", description: "Interactúa con 2 especies alienígenas", reward: "30 XP", completed: true },
    { name: "Estudio Estelar", description: "Analiza 5 estrellas diferentes", reward: "40 XP", completed: false }
  ])

  // Estrellas TODO: Cambiar
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

  // Datos para Descubrimientos incluyendo planetas
  const discoveries = [
    { 
      type: "Terrestres", 
      image: exoplanetImages.Terrestres, 
      total: 10, 
      unlocked: 1,
      planets: [
        { name: "KEPLER 452-B", info: "Orbita una estrella similar a nuestro sol en la zona habitable, podría existir agua líquida.", unlocked: true },
        { name: "Planeta B", info: "Con atmósfera densa y múltiples océanos.", unlocked: false },
        { name: "Planeta C", info: "Ubicado en la zona habitable de su estrella.", unlocked: false },
        { name: "Planeta D", info: "Posee una luna gigante.", unlocked: false },
        { name: "Planeta E", info: "Tiene signos de actividad geológica.", unlocked: false },
        { name: "Planeta F", info: "Presenta variaciones climáticas extremas.", unlocked: false },
        { name: "Planeta G", info: "Cuenta con sistemas de vida alienígena.", unlocked: false },
        { name: "Planeta H", info: "Área de biodiversidad excepcional.", unlocked: false },
        { name: "Planeta I", info: "Rodeado por un anillo luminoso.", unlocked: false },
        { name: "Planeta J", info: "Centro de investigaciones científicas.", unlocked: false },
      ]
    },
    { 
      type: "Super-Terrestres", 
      image: exoplanetImages['Super-Terrestres'], 
      total: 8, 
      unlocked: 0,
      planets: [
        { name: "Planeta K", info: "Tamaño mayor que la Tierra pero con condiciones habitables.", unlocked: true },
        { name: "Planeta L", info: "Posee múltiples continentes flotantes.", unlocked: true },
        { name: "Planeta M", info: "Con aire respirable pero con temperaturas elevadas.", unlocked: true },
        { name: "Planeta N", info: "Tierra doble en un sistema binario.", unlocked: true },
        { name: "Planeta O", info: "Con actividad volcánica intensa.", unlocked: true },
        { name: "Planeta P", info: "Zona de migración de especies avanzadas.", unlocked: false },
        { name: "Planeta Q", info: "Techo de cristal natural en su atmósfera.", unlocked: false },
        { name: "Planeta R", info: "Recursos minerales invaluables.", unlocked: false },
      ]
    },
    { 
      type: "Neptunianos", 
      image: exoplanetImages.Neptunianos, 
      total: 12, 
      unlocked: 2,
      planets: [
        { name: "Planeta S", info: "Composición principalmente de hielo y gas.", unlocked: true },
        { name: "Planeta T", info: "Tierra gaseosa con tormentas electrostáticas.", unlocked: true },
        { name: "Planeta U", info: "Posee un sistema de anillos espectacular.", unlocked: true },
        { name: "Planeta V", info: "Con océanos de amoníaco líquido.", unlocked: true },
        { name: "Planeta W", info: "Ubicado en la periferia de su galaxia.", unlocked: true },
        { name: "Planeta X", info: "Con múltiples lunas heladas.", unlocked: true },
        { name: "Planeta Y", info: "Sistema meteorológico único y complejo.", unlocked: true },
        { name: "Planeta Z", info: "Reserva de energías renovables extraterrestres.", unlocked: true },
        { name: "Planeta AA", info: "Cúpulas geodésicas naturales en la superficie.", unlocked: false },
        { name: "Planeta AB", info: "Con hendiduras minerales profundas.", unlocked: false },
        { name: "Planeta AC", info: "Zona de investigación científica avanzada.", unlocked: false },
        { name: "Planeta AD", info: "Refugio de especies acuáticas inteligentes.", unlocked: false },
      ]
    },
    { 
      type: "Gigantes Gaseosos", 
      image: exoplanetImages['Gigantes Gaseosos'], 
      total: 15, 
      unlocked: 1,
      planets: [
        { name: "Planeta AE", info: "Enorme planeta con capas de gas iridiscentes.", unlocked: true },
        { name: "Planeta AF", info: "Con sistemas de coloraciones atmosféricas cambiantes.", unlocked: true },
        { name: "Planeta AG", info: "Posee una estación espacial natural en sus nubes.", unlocked: true },
        { name: "Planeta AH", info: "Con internalización de torres de energía.", unlocked: true },
        { name: "Planeta AI", info: "Presencia de gigantescas tormentas eléctricas.", unlocked: true },
        { name: "Planeta AJ", info: "Órbita cercana a una estrella de neutrones.", unlocked: true },
        { name: "Planeta AK", info: "Con múltiples anillos compuestos por partículas de hielo.", unlocked: true },
        { name: "Planeta AL", info: "Centro de nexos energéticos interplanetarios.", unlocked: true },
        { name: "Planeta AM", info: "Habitat de criaturas aéreas prehistóricas.", unlocked: true },
        { name: "Planeta AN", info: "Reservorio de materiales de construcción avanzados.", unlocked: true },
        { name: "Planeta AO", info: "Conducción de estudios atmosféricos profundos.", unlocked: false },
        { name: "Planeta AP", info: "Base de investigaciones arqueológicas extraterrestres.", unlocked: false },
        { name: "Planeta AQ", info: "Infraestructura energética autosostenible.", unlocked: false },
        { name: "Planeta AR", info: "Área de terapias climáticas intergalácticas.", unlocked: false },
        { name: "Planeta AS", info: "Núcleo de investigación de tecnologías cuánticas.", unlocked: false },
      ]
    },
  ]

  // Función para alternar la expansión de una categoría de descubrimientos
  const toggleExpansion = (type) => {
    setExpandedDiscoveries(prevState => ({
      ...prevState,
      [type]: !prevState[type]
    }))
  }

  // Función para completar un desafío
  const completarDesafio = (challengeName) => {
    setDailyChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.name === challengeName ? { ...challenge, completed: true } : challenge
      )
    );
  };


  // Contar los desafíos pendientes
  const pendingChallenges = dailyChallenges.filter(challenge => !challenge.completed).length

  return (
    <PageWrapper>
      <BackToHome />

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
          {/* Navegación de Pestañas */}
          <div className="flex justify-center space-x-4 mb-8">
            {['info', 'logros', 'desafios', 'descubrimientos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-white text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {/* Badge para "Desafíos" */}
                {tab === 'desafios' && pendingChallenges > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {pendingChallenges}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Contenido de Pestañas */}
          {activeTab === 'info' && (
            <div className="text-white">
              <div className="flex items-center justify-center mb-6">
                <img src={frofilepic} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white" />
                <div className="ml-6 text-left">
                  <h2 className="text-3xl font-bold">Comandante {settings.username}</h2>
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

          {activeTab === 'desafios' && (
            <div className="space-y-4">
              {dailyChallenges.map((challenge, index) => (
                <AnimatePresence key={challenge.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-lg flex items-center ${
                      challenge.completed ? 'bg-green-600 bg-opacity-20' : 'bg-white bg-opacity-10'
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
                      <p className="text-gray-300">{challenge.description}</p>
                    </div>
                    <div className="text-right flex items-center">
                      <p className="text-yellow-300 mr-4">{challenge.reward}</p>
                      {challenge.completed ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center text-green-400"
                        >
                          <CheckCircle className="w-6 h-6 mr-1" />
                          <span className="font-semibold">Completado</span>
                        </motion.div>
                      ) : (
                        <button
                          onClick={() => completarDesafio(challenge.name)}
                          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        >
                          Completar
                          <motion.div
                            whileTap={{ scale: 0.9 }}
                            className="ml-2"
                          >
                            <Zap className="w-5 h-5 inline" />
                          </motion.div>
                        </button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          )}

          {activeTab === 'descubrimientos' && (
          <div className="max-h-[60vh] overflow-y-auto space-y-6">
              {discoveries.map((discovery, index) => (
              <motion.div
                  key={discovery.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col bg-white bg-opacity-10 p-4 rounded-lg"
              >
                  {/* Header con Imagen y Tipo */}
                  <div className="flex items-center justify-between">
                  <div className="flex items-center">
                      <img src={discovery.image} alt={discovery.type} className="w-20 h-20 rounded-full mr-6" />
                      <div>
                      <h3 className="text-2xl font-bold text-white">{discovery.type}</h3>
                      <p className="text-gray-300">{discovery.unlocked} de {discovery.total} planetas desbloqueados</p>
                      {/* Barra de Progreso */}
                      <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
                          <div 
                          className="bg-green-500 h-3 rounded-full" 
                          style={{ width: `${(discovery.unlocked / discovery.total) * 100}%` }}
                          ></div>
                      </div>
                      </div>
                  </div>
                  {/* Botón para Expandir/Colapsar */}
                  <button
                      onClick={() => toggleExpansion(discovery.type)}
                      className="text-white text-xl font-semibold px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                      {expandedDiscoveries[discovery.type] ? 'Ocultar' : 'Mostrar'}
                  </button>
                  </div>

                  {/* Lista de Planetas */}
                  <AnimatePresence>
                  {expandedDiscoveries[discovery.type] && (
                      <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                      >
                      {discovery.planets.map((planet, pIndex) => (
                          <motion.div
                          key={planet.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                          className="relative bg-white bg-opacity-20 rounded-lg overflow-hidden cursor-pointer"
                          >
                          {/* Imagen o indicador de bloqueo */}
                          {planet.unlocked ? (
                              <img src={planetImages[planet.name] || 'https://via.placeholder.com/80?text=Planeta'} alt={planet.name} className="w-full h-32 object-cover" />
                          ) : (
                              <div className="w-full h-32 bg-gray-700 flex items-center justify-center">
                              <Lock className="w-8 h-8 text-gray-300" />
                              </div>
                          )}

                          {/* Overlay de información en hover */}
                          {planet.unlocked && (
                              <motion.div
                              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                              whileHover={{ opacity: 1 }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0 }}
                              >
                              <h4 className="text-lg font-bold text-white">{planet.name}</h4>
                              <p className="text-sm text-gray-300 mb-2">{planet.info}</p>
                              <button 
                                  className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                                  onClick={() => alert(`Aprender más sobre ${planet.name}`)} // TODO: Lógica real
                              >
                                  Aprender Más
                              </button>
                              </motion.div>
                          )}

                          {/* Indicador para planetas bloqueados */}
                          {!planet.unlocked && (
                              <motion.div
                              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                              whileHover={{ opacity: 0.8 }}
                              initial={{ opacity: 0.5 }}
                              ></motion.div>
                          )}
                          </motion.div>
                      ))}
                      </motion.div>
                  )}
                  </AnimatePresence>
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
    </PageWrapper>
  )
}
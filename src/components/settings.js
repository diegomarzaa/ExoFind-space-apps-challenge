// src/components/Settings.js
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bell,
  Volume2,
  Cpu,
  Sliders,
  Eye,
  Globe,
  Palette,
  Calendar,
  Camera,
  Search,
  Lock,
  CheckCircle2
} from 'lucide-react'
import BackToHome from './BackToHome'
import PageWrapper from './PageWrapper'
import { useSettings } from '../context/SettingsContext'
import ListboxSelect from './ListboxSelect'

// NeonToggle Component
function NeonToggle({ enabled, onChange }) {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={`w-14 h-8 rounded-full cursor-pointer transition-all duration-300 relative ${
        enabled ? 'bg-cyan-500/80 shadow-[0_0_10px_#22d3ee]' : 'bg-gray-700'
      }`}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 transform ${
          enabled ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  )
}

export default function Settings() {
  const { settings, updateSetting } = useSettings()

  // Options for ListboxSelect components
  const languageOptions = ['Español', 'Inglés', 'Francés', 'Alemán']
  const resolutionOptions = ['720p', '1080p', '1440p', '2160p']
  const daltonismOptions = ['ninguno', 'protanopia', 'deuteranopia', 'tritanopia']

  // Local state for non-context settings
  const [language, setLanguage] = useState(languageOptions[0])
  const [volume, setVolume] = useState(50)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [resolution, setResolution] = useState('1080p')
  const [birthDate, setBirthDate] = useState('')
  const [localTime, setLocalTime] = useState('')
  const [accentColor, setAccentColor] = useState('#00ffcc')
  const [highContrast, setHighContrast] = useState(false)
  const [daltonismMode, setDaltonismMode] = useState('ninguno')
  const [searchCategories, setSearchCategories] = useState({
    planetas: true,
    especies: false,
    recursos: false
  })
  const [saveHistory, setSaveHistory] = useState(false)
  const [autoLogin, setAutoLogin] = useState(true)

  // Toggle function for multi-checkbox
  const toggleCategory = (cat) => {
    setSearchCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat]
    }))
  }

  return (
    <PageWrapper scrollable={true}>
      <BackToHome />
      <div className="z-10 text-center space-y-8 px-4 w-full max-w-4xl mx-auto">

        {/* Main Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut', delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Ajustes del Explorador
        </motion.h1>

        {/* User Data Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20 mb-2"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Camera className="w-7 h-7 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Perfil</h2>
          </div>

          <div className="space-y-4 text-left">
            {/* Explorer Name */}
            <div>
              <label className="text-white block mb-1 font-semibold">
                Nombre de Explorador
              </label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => updateSetting('username', e.target.value)}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu alias aquí..."
              />
            </div>

            {/* Language */}
            <ListboxSelect
              label="Idioma"
              value={language}
              options={languageOptions}
              onChange={setLanguage}
            />
          </div>
        </motion.div>

        {/* Notifications & Audio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20 mb-2"
        >
          {/* Notifications */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Bell className="w-7 h-7 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Notificaciones</h2>
            </div>
            <NeonToggle
              enabled={notificationsEnabled}
              onChange={setNotificationsEnabled}
            />
          </div>
          <p className="text-sm text-gray-300 mb-6 text-left">
            Mantente informado de eventos importantes como nuevos planetas
            descubiertos o mensajes de aliados.
          </p>

          {/* Sound */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-7 h-7 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Sonido</h2>
            </div>
            <NeonToggle enabled={soundEnabled} onChange={setSoundEnabled} />
          </div>

          {/* Master Volume (Slider) */}
          <label className="block text-left text-white mb-1 font-semibold">
            Volumen General: {volume}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-full h-2 bg-white bg-opacity-20 rounded-lg appearance-none cursor-pointer"
          />
        </motion.div>

        {/* Video Settings & Date/Time Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20 mb-2"
        >
          {/* Resolution */}
          <ListboxSelect
            label="Resolución"
            value={resolution}
            options={resolutionOptions}
            onChange={setResolution}
          />

          {/* Date & Local Time */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 text-left mt-4">
            <div className="mb-4 sm:mb-0 sm:flex-1">
              <label className="text-white block mb-1 font-semibold">
                Fecha de Nacimiento
              </label>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 p-2 rounded">
                <Calendar className="w-5 h-5 text-white" />
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="bg-transparent text-white w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:flex-1">
              <label className="text-white block mb-1 font-semibold">
                Hora Local
              </label>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 p-2 rounded">
                <Calendar className="w-5 h-5 text-white" />
                <input
                  type="time"
                  value={localTime}
                  onChange={(e) => setLocalTime(e.target.value)}
                  className="bg-transparent text-white w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Appearance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20 mb-2"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="w-7 h-7 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Apariencia</h2>
          </div>

          {/* High Contrast (Toggle) */}
          <div className="flex items-center justify-between mb-3">
            <label className="text-white font-semibold flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Contraste Alto</span>
            </label>
            <NeonToggle enabled={highContrast} onChange={setHighContrast} />
          </div>

          {/* Daltonism Mode */}
          <ListboxSelect
            label="Modo Daltonismo"
            value={daltonismMode}
            options={daltonismOptions}
            onChange={setDaltonismMode}
          />

          {/* Accent Color (Color Picker) */}
          <div className="mb-3 text-left mt-4">
            <label className="block text-white font-semibold mb-1">
              Color Destacado
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-10 h-10 p-0 border-none rounded cursor-pointer"
              />
              <span className="text-white text-sm">{accentColor}</span>
            </div>
          </div>
        </motion.div>

        {/* Search & Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20 mb-2"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Search className="w-7 h-7 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Búsqueda</h2>
          </div>

          <p className="text-sm text-gray-300 mb-4 text-left">
            Selecciona qué categorías quieres incluir en la barra de búsqueda principal.
          </p>

          <div className="flex flex-wrap gap-4 text-left">
            {/* Planets */}
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={searchCategories.planetas}
                onChange={() => toggleCategory('planetas')}
                className="w-4 h-4"
              />
              <span>Planetas</span>
            </label>

            {/* Alien Species */}
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={searchCategories.especies}
                onChange={() => toggleCategory('especies')}
                className="w-4 h-4"
              />
              <span>Especies Alienígenas</span>
            </label>

            {/* Resources */}
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={searchCategories.recursos}
                onChange={() => toggleCategory('recursos')}
                className="w-4 h-4"
              />
              <span>Recursos</span>
            </label>
          </div>
        </motion.div>

        {/* Privacy & Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bg-black bg-opacity-50 p-6 rounded-lg border border-white border-opacity-20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-7 h-7 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Privacidad & Seguridad</h2>
          </div>
          <div className="space-y-3 text-left">
            {/* Save History */}
            <div className="flex items-center justify-between">
              <label className="text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Guardar historial de misiones</span>
              </label>
              <NeonToggle enabled={saveHistory} onChange={setSaveHistory} />
            </div>

            {/* Auto-login */}
            <div className="flex items-center justify-between">
              <label className="text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Iniciar sesión automáticamente</span>
              </label>
              <NeonToggle enabled={autoLogin} onChange={setAutoLogin} />
            </div>
          </div>
        </motion.div>

        {/* Save Changes Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold text-xl rounded-full hover:bg-blue-700 transition-colors"
        >
          Guardar Cambios
        </motion.button>
      </div>
    </PageWrapper>
  )
}

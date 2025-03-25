import { createContext, useContext, useState } from 'react'

// Define default settings
const defaultSettings = {
  username: 'Explorador Alpha',
  soundEnabled: true,
  difficulty: 'normal',
  darkMode: false
}

// Create the context
const SettingsContext = createContext()

// Provider component
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings)

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}

// Hook for easy use
export const useSettings = () => useContext(SettingsContext)

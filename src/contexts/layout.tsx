'use client'
import { createContext, useContext, useEffect, useState } from 'react'

import { handleDarkTheme } from '@/utils/handleDarkTheme'

interface LayoutContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const LayoutContext = createContext<LayoutContextType>({
  darkMode: true,
  toggleDarkMode: () => {
    throw new Error('toggleDarkMode was not initialized')
  }
})

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<LayoutContextType['darkMode']>(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  useEffect(() => {
    handleDarkTheme().then((isDark) => {
      setDarkMode(isDark)
    })
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)

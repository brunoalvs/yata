'use client'
import { createContext, useContext, useEffect, useState } from 'react'

import { handleDarkTheme } from '@/utils/handleDarkTheme'

type LayoutContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const LayoutContext = createContext<LayoutContextType>({
  darkMode: true,
  toggleDarkMode: () => {}
})

export default function LayoutProvider ({ children }: { children: React.ReactNode}) {
  const [darkMode, setDarkMode] = useState<LayoutContextType['darkMode']>(true)

  const toggleDarkMode = async () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  useEffect(() => {
    handleDarkTheme().then((isDark) => setDarkMode(isDark))
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}
    >
      { children }
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)

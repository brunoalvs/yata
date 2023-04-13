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

export const LayoutProvider = ({ children }: { children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState<LayoutContextType['darkMode']>(
    JSON.parse(localStorage.getItem('darkMode') || 'true')
  )

  const toggleDarkMode = async () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  useEffect(() => {
    handleDarkTheme()
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

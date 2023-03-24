import { createContext, useState } from 'react'

type LayoutContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const LayoutContext = createContext<LayoutContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
})

export const LayoutProvider = ({ children }: { children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <LayoutContext.Provider value={{ darkMode, toggleDarkMode }}>
      { children }
    </LayoutContext.Provider>
  )
}

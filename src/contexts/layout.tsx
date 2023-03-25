import { createContext, useState } from 'react'

type LayoutContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  asideIsOpen: boolean
  toggleAside: () => void
  rightAsideIsOpen: boolean
  toggleRightAside: () => void
}

export const LayoutContext = createContext<LayoutContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  asideIsOpen: false,
  toggleAside: () => {},
  rightAsideIsOpen: false,
  toggleRightAside: () => {}
})

export const LayoutProvider = ({ children }: { children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false)
  const [asideIsOpen, setAsideIsOpen] = useState(false)
  const [rightAsideIsOpen, setRightAsideIsOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleAside = () => {
    setAsideIsOpen(!asideIsOpen)
  }

  const toggleRightAside = () => {
    setRightAsideIsOpen(!rightAsideIsOpen)
  }

  return (
    <LayoutContext.Provider value={{ darkMode, toggleDarkMode, asideIsOpen, toggleAside, rightAsideIsOpen, toggleRightAside }}>
      { children }
    </LayoutContext.Provider>
  )
}

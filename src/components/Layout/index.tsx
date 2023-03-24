import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/themes'
import { Header, Container } from './styles'

import { LayoutContext } from '@/contexts/layout'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { toggleDarkMode, darkMode } = useContext(LayoutContext)
  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <Header>
        <p>Dark Mode: { darkMode ? 'On' : 'Off' }</p>
        <button onClick={ () => toggleDarkMode() }>Toggle Dark Mode</button>
      </Header>
      <Container>
        <main>{ children }</main>
      </Container>
    </ThemeProvider>
  )
}

export default Layout

import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/themes'
import { LayoutContext } from '@/contexts/layout'

import * as S from './styles'
import LayoutRightAside from '../molecules/LayoutRightAside'
import LayoutAside from '../molecules/LayoutAside'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { toggleDarkMode, darkMode, rightAsideIsOpen, toggleRightAside, asideIsOpen, toggleAside } = useContext(LayoutContext)

  const sessionInfo = {
    name: 'Amanda Batista',
    src: ''
  }

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <S.Container>
        <LayoutAside />
        <S.Content rightAsideIsOpen={ rightAsideIsOpen }>
          <button onClick={ () => toggleAside() } style={{ background: '#000', fontSize: '3rem', border: '0', cursor: 'pointer' }}>
            { asideIsOpen ? '🔒' : '🔓' }
          </button>
          <button onClick={ () => toggleRightAside() } style={{ background: '#000', fontSize: '3rem', border: '0', cursor: 'pointer' }}>
            { rightAsideIsOpen ? '🔒' : '🔓' }
          </button>
          { children }
        </S.Content>
        <LayoutRightAside />
      </S.Container>
    </ThemeProvider>
  )
}

export default Layout

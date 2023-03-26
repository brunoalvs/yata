import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/themes'
import { LayoutContext } from '@/contexts/layout'

import * as S from './styles'
import AsideLayout from '../../molecules/AsideLayout'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const {
    darkMode,
    rightAsideIsOpen,
    toggleRightAside,
    asideIsOpen,
    toggleAside
  } = useContext(LayoutContext)

  const sessionInfo = {
    name: 'Amanda Batista',
    src: ''
  }

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <S.Container>
        <AsideLayout
          isOpen={ asideIsOpen }
          direction='left'
          onClose={ toggleAside }
        >
          <h1>{ sessionInfo.name }</h1>
        </AsideLayout>
        <S.Content rightAsideIsOpen={ rightAsideIsOpen }>
          <button
            onClick={ () => toggleAside() }
            style={{ background: '#000', fontSize: '3rem', border: '0', cursor: 'pointer' }}
          >
            { asideIsOpen ? '🔒' : '🔓' }
          </button>
          <button
            onClick={ () => toggleRightAside() }
            style={{ background: '#000', fontSize: '3rem', border: '0', cursor: 'pointer' }}
          >
            { rightAsideIsOpen ? '🔒' : '🔓' }
          </button>
          { children }
        </S.Content>
        <AsideLayout
          isOpen={ rightAsideIsOpen }
          direction='right'
          onClose={ toggleRightAside }
        >
          <h1>{ sessionInfo.name }</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate, similique, animi assumenda ea itaque ipsam mollitia nemo ad impedit dolor. Eveniet accusamus iste debitis a aperiam reiciendis incidunt dolorum.
          </p>
        </AsideLayout>
      </S.Container>
    </ThemeProvider>
  )
}

export default Layout

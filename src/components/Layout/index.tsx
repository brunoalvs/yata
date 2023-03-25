import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/themes'
import { LayoutContext } from '@/contexts/layout'

import * as S from './styles'
import UserAvatar from '../UserAvatar'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { toggleDarkMode, darkMode, rightAsideIsOpen, toggleRightAside } = useContext(LayoutContext)

  const sessionInfo = {
    name: 'Amanda Batista',
    src: ''
  }

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <S.Container>
        <S.Aside>
          <div style={{ display: 'grid', alignItems: 'center', gap: '1rem', gridTemplateColumns: '4.5rem 1fr' }}>
            <UserAvatar
              name={ sessionInfo.name }
              src={ sessionInfo.src }
            />
            <p style={{ fontSize: '1.5rem' }}>{ sessionInfo.name }</p>
          </div>
          <button onClick={ () => toggleRightAside() }>
            { rightAsideIsOpen ? '🔒' : '🔓' }
          </button>
        </S.Aside>
        <S.Content rightAsideIsOpen={ rightAsideIsOpen }>
          { children }
        </S.Content>
        <S.RightAside rightAsideIsOpen={ rightAsideIsOpen }>
          <S.RightAsideHeader>
            <button onClick={ () => toggleDarkMode() }>
              { darkMode ? '🌞' : '🌙' }
            </button>
            <section>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, reiciendis doloremque? Reiciendis iusto distinctio eos minus laboriosam quo? Illo expedita quod harum eius consequatur animi perferendis assumenda aspernatur iure ex!</p>
            </section>
          </S.RightAsideHeader>
        </S.RightAside>
      </S.Container>
    </ThemeProvider>
  )
}

export default Layout

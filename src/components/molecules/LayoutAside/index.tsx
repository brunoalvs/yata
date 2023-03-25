import { useContext } from 'react'
import { LayoutContext } from '@/contexts/layout'
import * as S from './styles'

const LayoutAside = () => {
  const { asideIsOpen, toggleAside, rightAsideIsOpen, toggleRightAside } = useContext(LayoutContext)

  return(
    <>
      <S.Container isOpen={ asideIsOpen }>
        <h1>Aside</h1>
        <button onClick={ () => toggleRightAside() }>
          { rightAsideIsOpen ? 'open' : 'close' } right aside
        </button>
      </S.Container>
      <S.Overlay isOpen={ asideIsOpen } onClick={ () => toggleAside() } />
    </>
  )}

export default LayoutAside

import { useContext } from 'react'
import { LayoutContext } from '@/contexts/layout'

import * as S from './styles'

const LayoutRightAside = () => {
  const { rightAsideIsOpen, toggleRightAside } = useContext(LayoutContext)

  return (
    <div>
      <S.Container isOpen={ rightAsideIsOpen }>
        <button onClick={ () => toggleRightAside() }>Close</button>
        <h1>Right Aside { rightAsideIsOpen ? 'closed' : 'opened' }</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        </p>
      </S.Container>
      <S.Overlay isOpen={ rightAsideIsOpen } onClick={ () => toggleRightAside() } />
    </div>
  )}

export default LayoutRightAside

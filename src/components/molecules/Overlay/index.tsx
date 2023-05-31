import { memo } from 'react'
import * as S from './styles'

export interface OverlayProps {
  isOpen: boolean
  onClick: () => void
  transparent?: boolean
}

const Overlay = ({ isOpen, onClick, transparent = false }: OverlayProps) => (
  <S.Container open={isOpen} onClick={onClick} hidden={transparent} />
)

export default memo(Overlay)

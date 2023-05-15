import { memo } from 'react'
import * as S from './styles'

export interface OverlayProps {
  isOpen: boolean
  onClick: () => void
}

const Overlay = ({ isOpen, onClick }: OverlayProps) => (
  <S.Container
    isOpen={ isOpen }
    onClick={ onClick }
  />
)

export default memo(Overlay)

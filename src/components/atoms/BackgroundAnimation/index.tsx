import { memo } from 'react'
import * as S from './styles'

function BackgroundAnimation() {
  return (
    <S.Wrapper>
      <S.Overlay />
      <S.Element />
    </S.Wrapper>
  )
}

export default memo(BackgroundAnimation)

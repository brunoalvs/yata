import { memo } from 'react'
import Image from 'next/image'
import * as S from './styles'

const LoadingScreen = () => (
  <S.Container>
    <S.Logo>
      <Image src="/favicon.png" alt="Yata" width={60} height={60} priority />
      <S.LogoText>Yata</S.LogoText>
    </S.Logo>
    <S.LoadingMessage>Loading...</S.LoadingMessage>
  </S.Container>
)

export default memo(LoadingScreen)

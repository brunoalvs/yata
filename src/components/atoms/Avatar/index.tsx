import { Suspense, memo } from 'react'
import Image from 'next/image'

import * as S from './styles'

enum AvatarSize {
  small = 32,
  medium = 48,
  large = 64,
}

interface AvatarProps {
  src: string
  name: string
  size?: keyof typeof AvatarSize
}

const Avatar = ({ src, name, size = 'medium' }: AvatarProps) => {
  return (
    <S.Container>
      <Suspense fallback={<div>loading...</div>}>
        <Image
          src={src === '' ? `https://ui-avatars.com/api/?name=${name}}` : src}
          alt={`Avatar of ${name}`}
          width={AvatarSize[size]}
          height={AvatarSize[size]}
        />
      </Suspense>
    </S.Container>
  )
}

export default memo(Avatar)

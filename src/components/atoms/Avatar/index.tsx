import type { FC } from 'react'
import { Suspense, useState } from 'react'
import Image from 'next/image'

import Skeleton from '@/components/molecules/SkeletonElements'
import * as S from './styles'

interface AvatarProps {
  src: string
  name: string
  size?: 'small' | 'medium' | 'large'
}

const Avatar: FC<AvatarProps> = ({ src, name, size = 'medium' }) => {
  const [imageSrc, setSrc] = useState<string>(src)

  function getName (name:string) {
    const [firstName, lastName] = name.split(' ')
    return `${firstName}+${lastName}`
  }

  const handleImageError = () => setSrc(`https://ui-avatars.com/api/?name=${getName(name)}}`)

  return (
    <S.Container>
      <Suspense fallback={ <Skeleton type='avatar' /> }>
        <Image
          src={ imageSrc }
          alt={ `Avatar of ${name}` }
          width={ size === 'small' ? 32 : size === 'large' ? 64 : 48 }
          height={ size === 'small' ? 32 : size === 'large' ? 64 : 48 }
          onError={ handleImageError }
        />
      </Suspense>
    </S.Container>
  )
}

export default Avatar

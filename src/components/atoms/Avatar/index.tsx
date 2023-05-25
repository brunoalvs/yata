import { Suspense, useState, useCallback, memo } from 'react'
import Image from 'next/image'

import Skeleton from '@/components/molecules/SkeletonElements'
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
  const [imageSrc, setSrc] = useState<string>(src)

  function getName(name: string) {
    const [firstName, lastName] = name.split(' ')
    return `${firstName}+${lastName}`
  }

  const handleImageError = useCallback(() => {
    setSrc(`https://ui-avatars.com/api/?name=${getName(name)}}`)
  }, [name])

  return (
    <S.Container>
      <Suspense fallback={<Skeleton type="avatar" />}>
        <Image
          src={imageSrc}
          alt={`Avatar of ${name}`}
          width={AvatarSize[size]}
          height={AvatarSize[size]}
          onError={handleImageError}
        />
      </Suspense>
    </S.Container>
  )
}

export default memo(Avatar)

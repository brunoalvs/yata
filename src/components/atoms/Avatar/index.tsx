import type { FC } from 'react'
import { Suspense } from 'react'
import Image from 'next/image'

import Skeleton from '@/components/molecules/SkeletonElements'

import styles from './styles.module.scss'

interface AvatarProps {
  src: string
  name: string
}

export const Avatar: FC<AvatarProps> = ({ src, name }) => {

  function initials (name: string) {
    return name.split(' ').map((word) => word[0]).join('')
  }

  if (!src) {
    return (
      <div className={ styles.container }>
        <div className={ styles.initials }>
          { initials(name) }
        </div>
      </div>
    )
  }

  const handleImageError = () => {
    console.log('Image error')
  }

  return (
    <div className={ styles.container }>
      <Suspense fallback={ <Skeleton type='avatar' /> }>
        <Image
          src={ src }
          alt={ `Avatar of ${name}` }
          width={ 48 }
          height={ 48 }
          onError={ handleImageError }
        />
      </Suspense>
    </div>
  )
}

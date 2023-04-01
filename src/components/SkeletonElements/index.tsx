import type { FC } from 'react'
import styles from './styles.module.scss'

interface SkeletonProps {
  type: 'text' | 'avatar'
}

const Skeleton: FC<SkeletonProps> = ({ type }) => (
  <div className={ styles.skeleton }>
    { type === 'text' && <div className={ styles.text } /> }
    { type === 'avatar' && <div className={ styles.avatar } /> }
  </div>
)

export default Skeleton

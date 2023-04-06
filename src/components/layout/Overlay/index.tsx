import styles from './styles.module.scss'

interface OverlayProps {
  isOpen: boolean
  onClick: () => void
}

export const Overlay = ({ isOpen, onClick }: OverlayProps) => (
  <div
    className={ styles.container }
    data-open={ isOpen }
    onClick={ onClick }
  />
)

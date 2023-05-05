import Button from '../Button'
import styles from './styles.module.scss'

interface ButtonIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onlyMobile?: boolean;
}

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => (
  <Button
    variant='text'
    className={ `${styles.container} ${props.className}` }
    onClick={ props.onClick }
    title={ props.title }
    data-mobile={ props.onlyMobile }
  >
    { children }
  </Button>
)

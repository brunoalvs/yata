import type { FC } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button:FC<ButtonProps> = ({ children, onClick, variant, ...props }) => (
  <button className={ styles.container } onClick={ onClick } data-variant={ variant } { ...props }>
    { children }
  </button>
)

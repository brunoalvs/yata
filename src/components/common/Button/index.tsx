import styles from './styles.module.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className={ `${styles.container} ${props.className}` }
    title={ props.title }
    onClick={ props.onClick }
  >
    { children }
  </button>
)

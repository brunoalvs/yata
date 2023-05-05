
import * as S from './styles'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'text';
  size?: 'small' | 'large';
  icon?: React.ReactNode;
}

const Button = ({
  children,
  variant = 'default',
  size = 'large',
  icon,
  ...props
}: ButtonProps) => (
  <S.Button
    variant={ variant }
    size={ size }
    { ...props }
  >
    <span />
    { icon && icon }
    { children }
    <span />
  </S.Button>
)

export default Button

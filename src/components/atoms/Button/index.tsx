import { memo, type HTMLAttributes, type ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  size?: 'reduced' | 'small' | 'large'
  variant?: 'default' | 'outline' | 'text'
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  fullWidth = false,
  type = 'button',
  icon,
  ...props
}: ButtonProps) => (
  <S.Container type={type} {...props}>
    <span />
    {icon ?? icon}
    {children}
    <span />
  </S.Container>
)

export default memo(Button)

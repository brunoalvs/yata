import type { HTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'
import * as S from './styles'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  size?: 'small' | 'large'
  variant?: 'default' | 'outline' | 'text'
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, type = 'button', ...props }: ButtonProps) => (
  <S.Container type={type} {...props}>
    <span />
    {props.icon ?? props.icon}
    {children}
    <span />
  </S.Container>
)

export default memo(Button)

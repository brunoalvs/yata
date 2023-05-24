import type { HTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'
import * as S from './styles'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  fullWidth?: boolean
  icon?: ReactNode
  size?: 'small' | 'large'
  variant?: 'default' | 'outline' | 'text'
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Container {...props}>
    <span />
    {props.icon ?? props.icon}
    {children}
    <span />
  </S.Container>
)

export default memo(Button)

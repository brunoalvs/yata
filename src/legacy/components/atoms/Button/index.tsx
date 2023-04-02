
import type { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  as?: React.ElementType
  href?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  fullWidth = false,

  as,
  href,
  ...props
}) => (
  <S.Wrapper
    size={ size }
    fullWidth={ fullWidth }
    as={ as }
    href={ href }
    { ...props }
  >

    { !!children && <span>{ children }</span> }
  </S.Wrapper>
)

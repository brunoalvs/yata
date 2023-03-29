import type { FC, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ ...props }) => (
  <S.Container { ...props } />
)

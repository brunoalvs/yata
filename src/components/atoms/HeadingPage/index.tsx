import type { HTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'
import * as S from './styles'

export interface HeadingPageProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const HeadingPage = ({ children, ...props }: HeadingPageProps) => (
  <S.Container { ...props }>
    { children }
  </S.Container>
)

export default memo(HeadingPage)

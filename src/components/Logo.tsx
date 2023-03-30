import type { FC } from 'react'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  full?: boolean
}

export const Logo: FC<LogoProps> = ({ full = false, ...props }) => (
  <img
    src={ full ? '/logo_full.svg' : '/favicon.png' }
    { ...props }
  />
)

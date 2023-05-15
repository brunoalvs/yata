import type { ImgHTMLAttributes } from 'react'
import { memo } from 'react'

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  full?: boolean
}

const Logo = ({ full = false, ...props }: LogoProps) => (
  <img
    src={ full ? '/logo_full.svg' : '/logo_icon.svg' }
    alt='Logo da aplicação Yata - uma aplicação de gerenciamento de tarefas'
    aria-label='Logo da aplicação Yata'
    aria-hidden='true'
    { ...props }
  />
)

export default memo(Logo)

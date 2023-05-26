import { memo } from 'react'
import Image from 'next/image'

interface LogoProps {
  full?: boolean
}

const Logo = ({ full = false }: LogoProps) => (
  <Image
    src={full ? '/logo-full.svg' : '/logo_icon.svg'}
    alt="Logo da aplicação Yata - uma aplicação de gerenciamento de tarefas"
    aria-label="Logo da aplicação Yata"
    aria-hidden="true"
    width={full ? 200 : 48}
    height={full ? 50 : 48}
  />
)

export default memo(Logo)

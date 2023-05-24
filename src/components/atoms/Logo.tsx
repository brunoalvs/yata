import { memo } from 'react'
import Image from 'next/image'

interface LogoProps {
  full?: boolean
}

const Logo = ({ full = false }: LogoProps) => (
  <Image
    src={full ? '/img/logo-full.svg' : '/img/logo.svg'}
    alt='Logo da aplicação Yata - uma aplicação de gerenciamento de tarefas'
    aria-label='Logo da aplicação Yata'
    aria-hidden='true'
  />
)

export default memo(Logo)

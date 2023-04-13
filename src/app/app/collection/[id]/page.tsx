'use client'

import { usePathname } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  const pathname = usePathname()

  return <div>Collection { params.id } - { pathname }</div>
}

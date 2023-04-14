'use client'
import { SessionProvider } from 'next-auth/react'
import LayoutProvider from '@/contexts/layout'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LayoutProvider>
        { children }
      </LayoutProvider>
    </SessionProvider>
  )
}

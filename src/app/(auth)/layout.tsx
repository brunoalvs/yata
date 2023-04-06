'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { Logo } from '@/components/Logo'
import { LoadingScreen } from '@/components/LoadingScreen'
import styles from './styles.module.css'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const { status } = useSession()

  if (status === 'loading') {
    return <LoadingScreen />
  }

  if (status === 'authenticated') {
    redirect('/app')
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <header className={ styles.header }>
          <Link href='/'>
            <Logo title='Yata - Yes, another todo app' width={ 32 } height={ 32 } />
          </Link>
          <nav className={ styles.navigation }>
            <Link href='signin'>
              Log in
            </Link>
            <Link href='signup'>
              Sign up
            </Link>
          </nav>
        </header>
        <section className={ styles.content }>
          { children }
        </section>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { Button } from '@/components/common'
import { Logo } from '@/components/Logo'
import { LoadingScreen } from '@/components/LoadingScreen'
import styles from './layout.module.scss'
import pageStyle from './page.module.scss'

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
            <Logo title='Yata - Yes, another todo app' width={ 64 } height={ 64 } />
          </Link>
          <nav className={ styles.navigation }>
            <Link href='signin'>
              Log in
            </Link>
            <Link href='signup'>
              <Button className={ pageStyle.buttonGetStarted }>
                Get Started
              </Button>
            </Link>
          </nav>
        </header>
        <div className={ styles.content }>
          { children }
        </div>
      </div>
    </div>
  )
}

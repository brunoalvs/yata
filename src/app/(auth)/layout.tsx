'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { Logo } from '@/components/Logo'
import styles from './styles.module.css'
import { LoadingScreen } from '@/components/LoadingScreen'

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
            <Link
              href='signin'
              className='hover:underline dark:text-white'
            >
                Log in
            </Link>
            <Link
              href='signup'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center'
            >
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

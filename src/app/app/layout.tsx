'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { UserOptions } from '@/components/UserOptions'
import styles from './layout.module.scss'
import { redirect } from 'next/navigation'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { status } = useSession()

  function toggleDrawer () {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    return () => {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'unauthenticated') {
    redirect('/signin')
  }

  return (
    <div className={ styles.container }>
      <aside className={ styles.sidebar }>
        <section>
          <UserOptions />
          <nav>
            <Link href='/app'>
              Today
            </Link>
          </nav>
        </section>
        <footer>
          <button>
            New List
          </button>
          <button>
            New Group
          </button>
        </footer>
      </aside>
      <div className={ styles.content }>
        { isMobile && <button onClick={ toggleDrawer }>Toggle</button> }
        { children }
        <button onClick={ toggleDrawer }>Toggle</button>
      </div>
      <section className={ styles.drawer } data-open={ isDrawerOpen }>
        <header>
          <button onClick={ toggleDrawer }>
            x
          </button>
        </header>
        <h1>Section</h1>
      </section>
      { isMobile && <div className={ styles.overlay } data-open={ isDrawerOpen } onClick={ toggleDrawer } /> }
    </div>
  )
}

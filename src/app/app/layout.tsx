'use client'
import { useEffect, useState } from 'react'
import styles from './layout.module.scss'
import { Avatar } from '@/components/Avatar'
import { UserOptions } from '@/components/UserOptions'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

  return (
    <div className={ styles.container }>
      <aside className={ styles.sidebar }>
        <section>
          <UserOptions user={{ name: 'Rafael Santos Oliveira', email: 'rafaelsantos@gmail.com' }} />
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

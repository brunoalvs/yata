'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { useLayout } from '@/contexts/layout'
import { TodosProvider } from '@/contexts/todos'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Overlay } from '@/components/layout/Overlay'
import { Sidebar } from '@/components/layout/Sidebar'
import styles from './layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { darkMode } = useLayout()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin')
    }
  })

  function toggleSidebar () {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function toggleDrawer () {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      setIsMobile(false)
    }
  }, [])

  if (status === 'loading') {
    return <LoadingScreen />
  }

  return (
    <TodosProvider>
      <div className={ styles.container } data-theme={ darkMode ? 'dark' : 'light' }>
        <Sidebar isOpen={ isSidebarOpen } closeSidebar={ toggleSidebar } />
        <div className={ styles.content }>
          { isMobile && <button onClick={ toggleSidebar }>Open Sidebar</button> }
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
        {
          isMobile &&
          <Overlay
            isOpen={ isDrawerOpen || isSidebarOpen }
            onClick={ isDrawerOpen ? toggleDrawer : toggleSidebar }
          />
        }
      </div>
    </TodosProvider>
  )
}
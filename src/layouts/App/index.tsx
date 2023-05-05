import { useEffect, useState } from 'react'
import { FiMenu, FiPlus } from 'react-icons/fi'

import Button from '@/components/atoms/Button'
import { Sidebar } from '@/components/layout/Sidebar'
import { Overlay } from '@/components/layout/Overlay'
import styles from './styles.module.scss'

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

  return (
    <div className={ styles.container } data-theme='dark'>
      <Sidebar isOpen={ isSidebarOpen } closeSidebar={ toggleSidebar } />
      <div className={ styles.content }>
        { isMobile && <Button variant='text' onClick={ toggleSidebar } title='Open Sidebar'><FiMenu /></Button> }
        <button onClick={ toggleDrawer }>Toggle</button>
        { children }
      </div>
      <section className={ styles.drawer } data-open={ isDrawerOpen }>
        <header>
          <Button
            variant='text'
            title='Close Drawer'
            onClick={ toggleDrawer }
          >
            <FiPlus style={{ transform: 'rotate(45deg)' }} />
          </Button>
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
  )
}

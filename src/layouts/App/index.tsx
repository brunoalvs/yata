import { useEffect, useState } from 'react'
import { FiMenu, FiPlus } from 'react-icons/fi'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Button from '@/components/atoms/Button'
import { Sidebar } from '@/components/molecules/Sidebar'
import { Overlay } from '@/components/molecules/Overlay'
import { Logo } from '@/components/atoms/Logo'
import styles from './styles.module.scss'
import BackgroundAnimation from '@/components/atoms/BackgroundAnimation'

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  const { status, data: session } = useSession()
  const { push } = useRouter()
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

  if (status === 'unauthenticated') {
    push('/signin')
    return (
      <BackgroundAnimation />
    )
  }

  return (
    <>
      <header className={ styles.header }>
        <Logo width={ 24 } />

        <section>
          <Button variant='text' title='Open Drawer' onClick={ toggleDrawer }><FiPlus /></Button>
        </section>
      </header>
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
    </>
  )
}

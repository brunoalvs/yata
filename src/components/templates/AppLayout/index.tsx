import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FiMenu, FiPlus } from 'react-icons/fi'

import Button from '@/components/atoms/Button'
import { Sidebar } from '@/components/organisms/Sidebar'
import Overlay from '@/components/molecules/Overlay'
import * as S from './styles'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { status } = useSession()
  const { push } = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  function handleToggleDrawer () {
    setIsDrawerOpen(!isDrawerOpen)
  }

  function handleToggleSidebar () {
    setIsSidebarOpen(!isSidebarOpen)
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
  }

  return (
    <S.Container data-theme='dark'>
      <Sidebar isOpen={ isSidebarOpen } closeSidebar={ handleToggleSidebar } />
      <S.Content>
        { isMobile && (
          <Button
            variant='text'
            onClick={ handleToggleSidebar }
            title='Open Sidebar'
          >
            <FiMenu />
          </Button>
        ) }
        { children }
      </S.Content>
      <S.Drawer data-open={ isDrawerOpen }>
        <S.DrawerHeader>
          <Button
            variant='text'
            title='Close Drawer'
            onClick={ handleToggleDrawer }
          >
            <FiPlus style={{ transform: 'rotate(45deg)' }} />
          </Button>
        </S.DrawerHeader>
      </S.Drawer>
      { isMobile && (
        <Overlay
          isOpen={ isDrawerOpen || isSidebarOpen }
          onClick={ isDrawerOpen ? handleToggleDrawer : handleToggleSidebar }
        />
      ) }
    </S.Container>
  )
}

export default AppLayout

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FiMenu, FiPlus } from 'react-icons/fi'

import { useAuthContext } from '@/contexts/AuthContext'
import Button from '@/components/atoms/Button'
import Sidebar from '@/components/organisms/Sidebar'
import Overlay from '@/components/molecules/Overlay'

import * as S from './styles'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const { user } = useAuthContext()
  const router = useRouter()

  function handleToggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  function handleToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (user === null) {
      const navigateToSignIn = async () => {
        try {
          await router.push('/signin')
        } catch (error) {
          console.error('Error navigating to sign in page', error)
        }
      }

      navigateToSignIn()
    }
  }, [router, user])

  if (user !== null) {
    return (
      <S.Container data-theme="dark">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={handleToggleSidebar} />
        <S.Content>
          {isMobile && (
            <Button
              onClick={handleToggleSidebar}
              title="Open Sidebar"
              variant="text"
            >
              <FiMenu />
            </Button>
          )}
          {children}
        </S.Content>
        <S.Drawer data-open={isDrawerOpen}>
          <S.DrawerHeader>
            <Button
              onClick={handleToggleDrawer}
              title="Close Drawer"
              variant="text"
            >
              <FiPlus />
            </Button>
          </S.DrawerHeader>
        </S.Drawer>
        {isMobile && (
          <Overlay
            isOpen={isDrawerOpen || isSidebarOpen}
            onClick={isDrawerOpen ? handleToggleDrawer : handleToggleSidebar}
          />
        )}
      </S.Container>
    )
  }

  return null
}

export default AppLayout

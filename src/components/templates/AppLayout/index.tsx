import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { FiMenu, FiPlus } from 'react-icons/fi'

import { useAuthContext } from '@/contexts/AuthContext'
import { TaskContextProvider } from '@/contexts/TaskContext'
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
      <>
        <Head>
          <meta name="author" content="Bruno Alves" />
          <meta
            name="description"
            content="A simple todo list application made with Next.js and Firebase"
          />
          <meta
            name="keywords"
            content="Next.js, Firebase, Todo List, Todo App, Todo"
          />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <TaskContextProvider>
          <S.Container>
            <Sidebar
              isOpen={isSidebarOpen}
              closeSidebar={handleToggleSidebar}
            />
            <S.Content>
              {isMobile && (
                <header>
                  <Button
                    onClick={handleToggleSidebar}
                    title="Open Sidebar"
                    variant="text"
                    style={{
                      borderRadius: '1rem',
                    }}
                  >
                    <FiMenu />
                  </Button>
                </header>
              )}
              <h1>PageTitle</h1>
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
                onClick={
                  isDrawerOpen ? handleToggleDrawer : handleToggleSidebar
                }
              />
            )}
          </S.Container>
        </TaskContextProvider>
      </>
    )
  }

  return null
}

export default AppLayout

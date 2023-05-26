import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import BackgroundAnimation from '@/components/atoms/BackgroundAnimation'
import styles from './styles.module.scss'

interface InstitutionalProps {
  children: React.ReactNode
}

export default function Institutional({ children }: InstitutionalProps) {
  const { status } = useSession()
  const { push, pathname } = useRouter()

  const handlePush = async (path: string) => {
    await push(path)
  }

  if (status === 'authenticated') {
    void push('/app')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/">
            <Logo />
          </Link>
          <nav className={styles.navigation}>
            {pathname !== '/signin' ? (
              <Button
                variant="text"
                onClick={() => {
                  handlePush('/signin')
                }}
              >
                Sign In
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={() => {
                  handlePush('/signup')
                }}
              >
                Sign Up
              </Button>
            )}
            <Button
              onClick={() => {
                handlePush('/signup')
              }}
            >
              Get Started
            </Button>
          </nav>
        </header>
        <section className={styles.content}>{children}</section>
        {pathname === '/signin' || pathname === '/signup' ? (
          <footer className={styles.footer}>
            <p>
              Your security and privacy are our top priority. That's why we
              offer the option to login with your Google or Github account, so
              you can be confident that your information is safe and secure.
            </p>
          </footer>
        ) : null}
      </div>
      <BackgroundAnimation />
    </div>
  )
}

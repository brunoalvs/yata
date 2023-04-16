import Link from 'next/link'

import { Button } from '@/components/common'
import { Logo } from '@/components/Logo'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import styles from './styles.module.scss'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { LoadingScreen } from '@/templates/LoadingScreen'

interface InstitutionalProps {
  children: React.ReactNode;
}

export default function Institutional({ children }: InstitutionalProps) {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'loading') {
    return <LoadingScreen />
  }

  if (status === 'authenticated') {
    push('/app')
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <header className={ styles.header }>
          <Link href='/'>
            <Logo
              width={ 48 }
              height={ 48 }
              title='Yata - Yes, another todo app'
            />
          </Link>
          <nav className={ styles.navigation }>
            <Link href='signin'>
              Sign In
            </Link>
            <Link href='signup'>
              <Button className={ styles.buttonGetStarted }>
                Get Started
              </Button>
            </Link>
          </nav>
        </header>
        <section className={ styles.content }>
          { children }
        </section>
      </div>
      <BackgroundAnimation />
    </div>
  )
}

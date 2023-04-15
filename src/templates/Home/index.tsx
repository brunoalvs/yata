import Link from 'next/link'

import { Button, HeadingPage } from '@/components/common'
import { Logo } from '@/components/Logo'
import styles from './styles.module.scss'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export default function HomeTemplate () {
  return (
    <>
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
                Log in
              </Link>
              <Link href='signup'>
                <Button className={ styles.buttonGetStarted }>
                  Get Started
                </Button>
              </Link>
            </nav>
          </header>
          <section className={ styles.content }>
            <HeadingPage>Yes! Another Todo App</HeadingPage>
            <p>Yata is a web application that allows you to manage your tasks in a simple and intuitive way. Stop wasting time and start achieving your goals with our Todo App.</p>
            <p>Sign up today and experience the power of efficient task management!</p>
            <Link href='/app'>
              <Button className={ styles.buttonGetStarted }>
                Get Started
              </Button>
            </Link>
          </section>
        </div>
        <BackgroundAnimation />
      </div>
    </>
  )
}

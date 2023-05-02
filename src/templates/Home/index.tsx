import Link from 'next/link'

import { Button } from '@/components/atoms/Button'
import { HeadingPage } from '@/components/atoms/HeadingPage'
import styles from './styles.module.scss'

export default function HomeTemplate () {
  return (
    <>
      <HeadingPage>Yes! Another Todo App</HeadingPage>
      <p>Yata is a web application that allows you to manage your tasks in a simple and intuitive way. Stop wasting time and start achieving your goals with our Todo App.</p>
      <p>Sign up today and experience the power of efficient task management!</p>
      <Link href='/app'>
        <Button className={ styles.buttonGetStarted }>
          Get Started
        </Button>
      </Link>
    </>
  )
}

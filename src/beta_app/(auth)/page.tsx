import Link from 'next/link'
import { Button, HeadingPage } from '@/components/common'
import styles from './page.module.scss'

export default function Home() {
  return (
    <section className={ styles.container }>
      <HeadingPage>
        Yes! Another todo app
      </HeadingPage>
      <p>
        Yata is a web application that allows you to manage your tasks in a simple and intuitive way.
      </p>
      <Link href='/app'>
        <Button className={ styles.buttonGetStarted }>
          Get Started
        </Button>
      </Link>
    </section>
  )
}

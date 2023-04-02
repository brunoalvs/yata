import Link from 'next/link'
import ButtonLogin from '@/components/login-btn'

import styles from './styles.module.css'

export default function Home() {
  return (
    <section className={ styles.home_container }>
      <h1 className={ styles.heading }>
        Welcome to Yata!
      </h1>
      <p>
        Yata is a web application that allows you to manage your tasks in a simple and intuitive way.
      </p>
      <ButtonLogin />
      <Link href='/app'>
        Get Started
      </Link>
    </section>
  )
}

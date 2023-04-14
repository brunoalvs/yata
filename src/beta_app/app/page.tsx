'use client'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HeadingPage } from '@/components/common/HeadingPage'
import { ButtonIcon } from '@/components/common/ButtonIcon'
import styles from './page.module.scss'

export default function AppPage() {
  return (
    <section className={ styles.container }>
      <header className={ styles.header }>
        <div>
          <HeadingPage>My Day</HeadingPage>
          <p>
            { new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) }
          </p>
        </div>
        <ButtonIcon title='Open options'>
          <FiMoreHorizontal />
        </ButtonIcon>
      </header>
      <section className={ styles.content }>
        <h1>Welcome to Yata!</h1>
      </section>
    </section>
  )
}


'use client'

import styles from './page.module.scss'

export default function AppPage() {
  return (
    <section className={ styles.container }>
      <header className={ styles.header }>
        <h2 className={ styles.title }>List Name</h2>
      </header>
      <h1>Welcome to Yata!</h1>
    </section>
  )
}

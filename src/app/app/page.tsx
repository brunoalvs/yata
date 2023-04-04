
'use client'

import { ListOptions } from '@/components/ListOptions'
import styles from './page.module.scss'

export default function AppPage() {

  const list = [
    { name: 'List item 1', onClick: () => console.log('List 1') },
    { name: 'List item 2', onClick: () => console.log('List 2') },
    { name: 'List item 3', onClick: () => console.log('List 3') },
  ]

  return (
    <section className={ styles.container }>
      <header className={ styles.header }>
        <h2 className={ styles.title }>List Name</h2>
      </header>
      <h1>Welcome to Yata!</h1>
    </section>
  )
}

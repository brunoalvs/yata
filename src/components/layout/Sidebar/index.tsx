import Link from 'next/link'

import { SidebarUserOptions } from '@/components/SidebarUserOptions'
import styles from './styles.module.scss'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => (
  <aside className={ styles.container } data-open={ isOpen }>
    <header>
      <button onClick={ () => closeSidebar() }>Close Sidebar</button>
      <SidebarUserOptions />
    </header>
    <section>
      <nav className={ `${styles.lists} ${styles.default}` }>
        <Link href='/app'>
          Today
        </Link>
        <Link href='/app'>
          All
        </Link>
        <Link href='/app'>
          Tasks without a list
        </Link>
      </nav>
    </section>
    <footer>
      <button>New List</button>
      <button>New Group</button>
    </footer>
  </aside>
)

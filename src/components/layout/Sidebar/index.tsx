import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiPlus, FiPlusSquare, FiMenu } from 'react-icons/fi'

import { TaskContext } from '@/contexts/task'
import { Button, ButtonIcon } from '@/components/common'
import { SidebarUserOptions } from '@/components/SidebarUserOptions'
import styles from './styles.module.scss'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const { collections } = useContext(TaskContext)
  const pathname = usePathname()

  return (
    <aside className={ styles.container } data-open={ isOpen }>
      <header className={ styles.header }>
        <ButtonIcon onClick={ () => closeSidebar() } title='Close Sidebar'>
          <FiMenu />
        </ButtonIcon>
        <SidebarUserOptions />
      </header>
      <section className={ styles.content }>
        <nav className={ `${styles.lists} ${styles.default}` }>
          <Link
            href='/app'
            title='A list that refreshes every day'
            data-current={ pathname === '/app' }
          >
            Today
          </Link>
          <Link
            href='/app/all'
            title='All tasks'
            data-current={ pathname === '/app/all' }
          >
            All
          </Link>
        </nav>
        <nav className={ styles.lists }>
          {
            collections.collections.map((collection) => (
              <Link
                key={ collection.id }
                href={ `/app/collection/${collection.id}` }
                data-current={ pathname?.includes(collection.id) ? 'true' : 'false' }
              >
                { collection.title }
              </Link>
            ))
          }
        </nav>
      </section>
      <footer className={ styles.footer }>
        <Button
          className={ styles.buttonNewCollection }
          onClick={ () => collections.addCollection('Untitled collection') }
          title='Create a new Collection'
        >
          <FiPlus />
          New Collection
        </Button>
        <Button className={ styles.buttonNewGroup } title='Create a new Group'>
          <FiPlusSquare />
        </Button>
      </footer>
    </aside>
  )}

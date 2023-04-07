import { useContext } from 'react'
import Link from 'next/link'

import { TaskContext } from '@/contexts/task'
import { FiPlus, FiPlusSquare, FiMenu } from 'react-icons/fi'
import { SidebarUserOptions } from '@/components/SidebarUserOptions'
import { Button } from '@/components/common/Button'
import { ButtonIcon } from '@/components/common/ButtonIcon'
import styles from './styles.module.scss'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const { collections } = useContext(TaskContext)

  return (
    <aside className={ styles.container } data-open={ isOpen }>
      <header>
        <ButtonIcon onClick={ () => closeSidebar() } title='Close Sidebar'>
          <FiMenu />
        </ButtonIcon>
        <SidebarUserOptions />
      </header>
      <section>
        <nav className={ `${styles.lists} ${styles.default}` }>
          <Link href='/app' title='A list that refreshes every day'>
            Today
          </Link>
          {
            collections.collections.map((collection) => (
              <Link key={ collection.id } href={ `app/collection/${collection.id}` }>
                { collection.title }
              </Link>
            ))
          }
        </nav>
      </section>
      <footer>
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

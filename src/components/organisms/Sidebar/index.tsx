import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { FiPlus, FiPlusSquare, FiMenu } from 'react-icons/fi'

import { TaskContext } from '@/contexts/task'
import Button from '@/components/atoms/Button'
import { SidebarUserOptions } from '@/components/organisms/SidebarUserOptions'
import styles from './styles.module.scss'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const { collections } = useContext(TaskContext)
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <aside className={ styles.container } data-open={ isOpen }>
      <header className={ styles.header }>
        <Button
          variant='text'
          title='Close Sidebar'
          onClick={ () => closeSidebar() }
        >
          <FiMenu />
        </Button>
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
            All Tasks
          </Link>
        </nav>
        <nav className={ styles.lists }>
          { collections.collections.filter((collection) => collection.author === session?.user?.id).map((collection) => (
            <Link
              key={ collection.id }
              href={ `/app/collection/${collection.id}` }
              data-current={ pathname?.includes(collection.id) ? 'true' : 'false' }
            >
              { collection.title }
            </Link>
          )) }
        </nav>
      </section>
      <footer className={ styles.footer }>
        <Button
          icon={ <FiPlus /> }
          variant='text'
          size='small'
          onClick={ () => collections.addCollection({ author: session?.user?.id || '', title: 'Untitled Collection' }) }
        >
          New Collection
        </Button>
        <Button
          variant='text'
          title='Create a new Group'
        >
          <FiPlusSquare />
        </Button>
      </footer>
    </aside>
  )
}

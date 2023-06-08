import { usePathname } from 'next/navigation'
import { FiPlus, FiMenu } from 'react-icons/fi'
import { IoHome, IoAlbums } from 'react-icons/io5'

import Button from '@/components/atoms/Button'
import ProfileMenu from '@/components/organisms/ProfileMenu'
import * as S from './styles'
import { useTaskContext } from '@/contexts/TaskContext'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const pathname = usePathname()
  const { collections } = useTaskContext()

  return (
    <S.Container data-open={isOpen}>
      <S.Header>
        <Button
          variant="text"
          title="Close Sidebar"
          onClick={() => {
            closeSidebar()
          }}
        >
          <FiMenu />
        </Button>
        <ProfileMenu />
      </S.Header>
      <S.Content>
        <S.List>
          <S.ListItem
            href="/app"
            title="A list that refreshes every day"
            data-current={pathname === '/app'}
          >
            <IoHome />
            Today
          </S.ListItem>
          <S.ListItem
            href="/app/all"
            title="All tasks"
            data-current={pathname === '/app/all'}
          >
            <IoAlbums />
            All Tasks
          </S.ListItem>
        </S.List>
      </S.Content>
      <S.Footer>
        <Button
          variant="text"
          size="small"
          onClick={() => {
            console.log('New Collection')
          }}
        >
          New Collection
          <FiPlus />
        </Button>
        <S.List>
          {collections.map((collection) => (
            <S.ListItem
              key={collection.id}
              href={`/app/collection/${collection.id}`}
              title={collection.title}
              data-current={pathname === `/app/collection/${collection.id}`}
            >
              <IoAlbums />
              {collection.title}
            </S.ListItem>
          ))}
        </S.List>
      </S.Footer>
    </S.Container>
  )
}

export default Sidebar

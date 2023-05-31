import { usePathname } from 'next/navigation'
import { FiPlus, FiPlusSquare, FiMenu } from 'react-icons/fi'

import Button from '@/components/atoms/Button'
import ProfileMenu from '@/components/organisms/ProfileMenu'
import * as S from './styles'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const pathname = usePathname()

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
            Today
          </S.ListItem>
          <S.ListItem
            href="/app/all"
            title="All tasks"
            data-current={pathname === '/app/all'}
          >
            All Tasks
          </S.ListItem>
        </S.List>
        {/* <nav className={styles.lists}>
          {collections.collections
            .filter((collection) => collection.author === session?.user?.id)
            .map((collection) => (
              <Link
                key={collection.id}
                href={`/app/collection/${collection.id}`}
                data-current={
                  pathname?.includes(collection.id) ? 'true' : 'false'
                }
              >
                {collection.title}
              </Link>
            ))}
        </nav> */}
      </S.Content>
      <S.Footer>
        <Button
          icon={<FiPlus />}
          variant="text"
          size="small"
          onClick={() => {
            // handleNewCollection()
          }}
        >
          New Collection
        </Button>
        <Button variant="text" title="Create a new Group">
          <FiPlusSquare />
        </Button>
      </S.Footer>
    </S.Container>
  )
}

export default Sidebar

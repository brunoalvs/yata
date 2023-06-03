import { usePathname } from 'next/navigation'
import { FiPlus, FiMenu } from 'react-icons/fi'
import { IoHome, IoAlbums } from 'react-icons/io5'

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
      </S.Footer>
    </S.Container>
  )
}

export default Sidebar

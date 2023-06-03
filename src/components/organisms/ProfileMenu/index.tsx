import { useState } from 'react'
import { useRouter } from 'next/router'
import { signOut } from '@/firebase/auth/signout'
import {
  IoChevronDown,
  IoLogOutOutline,
  IoSettingsOutline,
} from 'react-icons/io5'

import { useAuthContext } from '@/contexts/AuthContext'
import Button from '@/components/atoms/Button'
import DropdownnMenu from '@/components/molecules/DropdownMenu'
import Overlay from '@/components/molecules/Overlay'
import UserInfo from '@/components/molecules/UserInfo'
import * as S from './styles'

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuthContext()
  const { push } = useRouter()

  const handleSignOut = () => {
    console.log('Signning out...')
    signOut()
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Container>
        <Button
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleToggle}
          size="reduced"
          variant="text"
        >
          <UserInfo
            user={{
              name: user?.displayName ?? '',
              image: user?.photoURL ?? '',
              email: user?.email ?? '',
            }}
          />
          <S.IconWrapper>
            <IoChevronDown />
          </S.IconWrapper>
        </Button>
        <DropdownnMenu
          isOpen={isOpen}
          items={[
            {
              name: 'Settings',
              icon: <IoSettingsOutline />,
              onClick: () => {
                push('/app/settings')
              },
            },
            {
              name: 'Logout',
              icon: <IoLogOutOutline />,
              onClick: () => {
                handleSignOut()
              },
            },
          ]}
        />
      </S.Container>
      <Overlay isOpen={isOpen} onClick={handleToggle} transparent={true} />
    </>
  )
}

export default ProfileMenu

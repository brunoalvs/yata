import { useState } from 'react'
import { signOut } from '@/firebase/auth/signout'

import DropdownnMenu from '@/components/molecules/DropdownMenu'
import UserInfo from '@/components/molecules/UserInfo'
import Button from '@/components/atoms/Button'
import * as S from './styles'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import Overlay from '@/components/molecules/Overlay'

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
          variant="text"
          style={{ width: '100%' }}
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <UserInfo
            user={{
              name: user?.displayName ?? '',
              image: user?.photoURL ?? '',
              email: user?.email ?? '',
            }}
          />
        </Button>
        <DropdownnMenu
          isOpen={isOpen}
          items={[
            {
              name: 'Settings',
              onClick: () => {
                push('/app/settings')
              },
            },
            {
              name: 'Logout',
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

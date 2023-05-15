import { useState } from 'react'
import DropdownnMenu from '@/components/molecules/DropdownMenu'
import UserInfo from '@/components/molecules/UserInfo'
import Button from '@/components/atoms/Button'
import * as S from './styles'

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <Button
        fullWidth={ true }
        variant='text'
        style={{ width: '100%' }}
        aria-haspopup='true'
        aria-expanded={ isOpen }
        onClick={ () => setIsOpen(!isOpen) }
      >
        <UserInfo
          user={{
            name: 'UserName',
            email: 'user@email.com',
            image: 'https://lh3.googleusercontent.com/a/AGNmyxbXZDYE1t0yXIz8MraVl29kor-wU8zq-WIKajMurA=s96-c'
          }}
        />
      </Button>
      <DropdownnMenu
        isOpen={ isOpen }
        items={ [
          { name: 'Settings', onClick: () => console.log('Settings') },
          { name: 'Logout', onClick: () => console.log('Logout') }
        ] }
      />
    </S.Container>
  )}

export default ProfileMenu

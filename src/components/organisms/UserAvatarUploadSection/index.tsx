import { useRef } from 'react'
import Avatar from '@/components/atoms/Avatar'
import Button from '@/components/atoms/Button'

import * as S from './styles'

interface UserAvatarUploadSectionProps {
  user: {
    displayName: string
    photoURL: string
  }
}

const UserAvatarUploadSection = ({ user }: UserAvatarUploadSectionProps) => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null)

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()

    if (hiddenFileInput.current === null) {
      return
    }

    hiddenFileInput.current.click()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }

    const fileUploaded = event.target.files[0]
    console.log(fileUploaded)
  }

  return (
    <S.Container>
      <S.WrapperAvatar>
        <input
          ref={hiddenFileInput}
          type="file"
          name="file"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <Avatar name={user.displayName} src={user.photoURL} size="giant" />
        <Button
          variant="text"
          onClick={(e) => {
            handleClick(e)
          }}
        >
          Change your picture
        </Button>
      </S.WrapperAvatar>
    </S.Container>
  )
}

export default UserAvatarUploadSection

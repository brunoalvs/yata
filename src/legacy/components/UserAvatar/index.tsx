import { useEffect } from 'react'
import * as S from './styles'

interface UserAvatarProps {
  name: string;
  src: string;
}

const UserAvatar = ({ name, src }: UserAvatarProps) => {


  function checkIfImageExists(imageUrl) {
    if (!imageUrl) return false

    const http = new XMLHttpRequest()
    http.open('HEAD', imageUrl, false)
    http.send()
    return http.status != 404
  }

  function handleNameInitials() {
    const nameSplitted = name.split(' ')
    const firstLetter = nameSplitted[0].charAt(0)
    const secondLetter = nameSplitted[1].charAt(0)
    return `${firstLetter}${secondLetter}`
  }

  useEffect(() => {

  }, [])

  return (
    <S.Container>
      { checkIfImageExists(src) ? (
        <img src={ src } alt={ name } />
      ) : (
        <span>{ handleNameInitials() }</span>
      ) }
    </S.Container>
  )
}

export default UserAvatar

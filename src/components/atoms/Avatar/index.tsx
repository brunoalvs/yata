interface AvatarProps {
  displayName: string
  photoURL: string
}

const Avatar = ({ displayName, photoURL }: AvatarProps) => {

  const initials = displayName.split(' ').map((name) => name[0]).join('')
  const avatar = photoURL || `https://ui-avatars.com/api/?name=${initials}`

  function handleImageError(e) {
    e.target.src = `https://ui-avatars.com/api/?name=${initials}`
  }

  return (
    <img
      src={ avatar }
      alt={ displayName }
      onError={ (e) => handleImageError(e) }
    />
  )
}

export default Avatar

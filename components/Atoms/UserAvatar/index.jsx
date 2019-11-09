import { Container } from './styles'

function UserAvatar({ url }) {
  return (
    <Container>
      <img src={url} />
    </Container>
  )
}

UserAvatar.defaultProps = {
  url: 'http://localhost:4000/avatar-default.png'
}

export default UserAvatar

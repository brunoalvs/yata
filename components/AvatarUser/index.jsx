import styled from 'styled-components'

const Container = styled.section`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
`

const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const defaultAvatar = 'avatar-default.png'

const AvatarUser = props => {
  return (
    <Container>
      <UserPhoto src={props.avatarUrl} />
    </Container>
  )
}

AvatarUser.defaultProps = {
  avatarUrl: defaultAvatar
}

export default AvatarUser

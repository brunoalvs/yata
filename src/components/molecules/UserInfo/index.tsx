import Avatar from '@/components/atoms/Avatar'
import * as S from './styles'

interface UserInfoProps {
  user: {
    name: string
    image: string
    email: string
  }
}

const UserInfo = ({ user }: UserInfoProps) => (
  <S.Container>
    <Avatar src={user?.image} name={user.name} />
    <S.UserInfoWrapper>
      <S.UserName>{user.name}</S.UserName>
      <S.UserEmail>{user.email}</S.UserEmail>
    </S.UserInfoWrapper>
  </S.Container>
)

export default UserInfo

import Avatar from '@/components/atoms/Avatar'
import * as S from './styles'

interface UserInfoProps {
  user: {
    name: string
    email: string
    image: string
  }
}

const UserInfo = ({ user }: UserInfoProps) => (
  <S.Container>
    <Avatar src={ user?.image } name={ user.name } />
    <S.UserName>
      { user.name }
    </S.UserName>
  </S.Container>
)

export default UserInfo

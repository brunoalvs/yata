import Link from 'next/link'
import * as S from './styles'

export const NotLoggedSignScreen = () => (
  <S.Wrapper>
    <S.Container>
      <S.Heading>Welcome to Yata</S.Heading>
      <S.Paragraph>
        Yata is a web application that allows you to manage your tasks in a simple and intuitive way.
      </S.Paragraph>
      <Link href='/signin'>
        <S.Button>
          Sign In
        </S.Button>
      </Link>
      <S.Paragraph>
        <Link href='/profile'>Login</Link> or <Link href='/profile'>Register</Link> to start using Yata.
      </S.Paragraph>
    </S.Container>
  </S.Wrapper>
)

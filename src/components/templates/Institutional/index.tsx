import { useRouter } from 'next/router'
import Link from 'next/link'

import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import BackgroundAnimation from '@/components/atoms/BackgroundAnimation'
import * as S from './styles'

interface InstitutionalProps {
  children: React.ReactNode
}

export default function Institutional({ children }: InstitutionalProps) {
  const { push, pathname } = useRouter()

  const handlePush = async (path: string) => {
    await push(path)
  }

  // if (status === 'authenticated') {
  //   void push('/app')
  // }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Link href="/">
            <Logo />
          </Link>
          <S.Navigation>
            {pathname !== '/signin' ? (
              <Button
                variant="text"
                onClick={() => {
                  handlePush('/signin')
                }}
              >
                Sign In
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={() => {
                  handlePush('/signup')
                }}
              >
                Sign Up
              </Button>
            )}
            <Button
              onClick={() => {
                handlePush('/signup')
              }}
            >
              Get Started
            </Button>
          </S.Navigation>
        </S.Header>
        <S.Content>{children}</S.Content>
        {pathname === '/signin' || pathname === '/signup' ? (
          <S.Footer>
            <p>
              Your security and privacy are our top priority. That's why we
              offer the option to login with your Google or Github account, so
              you can be confident that your information is safe and secure.
            </p>
          </S.Footer>
        ) : null}
      </S.Container>
      <BackgroundAnimation />
    </S.Wrapper>
  )
}
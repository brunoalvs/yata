import type { FC } from 'react'

import { Logo } from '@/components/atoms/Logo'
import * as S from './styles'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  type: 'signup' | 'signin'
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Sign: FC<Props> = ({ children, type, onSubmit }) => (
  <>
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Logo
            width={ 32 }
            height={ 32 }
          />
          <S.HeaderRight>
            {
              type === 'signup' ? (
                <p>
                  Already have an account?{ ' ' }
                  <Link href='/signin'>
                    Sign In
                  </Link>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account?{ ' ' }
                  <Link href='/signup'>
                    Sign Up
                  </Link>
                </p>
              )
            }
          </S.HeaderRight>
        </S.Header>
        <S.Content>
          <S.Form onSubmit={ onSubmit }>
            { children }
          </S.Form>
        </S.Content>
        <S.Footer>
          {
            type === 'signup' ? (
              <p>By creating an account, you agree to our <a>Terms of Service</a>. For more information about how we use your data, please read our <a>Privacy Policy</a>. We&apos;ll occasionally send you account related emails.</p>
            ): (
              <p>By signing in, you agree to our <a>Terms of Service</a>. For more information about how we use your data, please read our <a>Privacy Policy</a>. We&apos;ll occasionally send you account related emails.</p>
            )
          }
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  </>
)

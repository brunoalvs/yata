import { signIn } from 'next-auth/react'
import { ButtonSocialSign } from '@/components/common/ButtonSocialSign'
import { HeadingPage } from '@/components/common'

export default function SignInTemplate () {
  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>Sign In using your Google's <br />or Github's account.</p>
      <ButtonSocialSign provider='google' onClick={ () => signIn('google') }>
        Continue with Google
      </ButtonSocialSign>
      <ButtonSocialSign provider='github' onClick={ () => signIn('github') }>
        Continue with GitHub
      </ButtonSocialSign>
      <footer>
        <p>Don't have an account?</p>
        <a href='/signup'>Sign Up</a>
      </footer>
    </>
  )
}

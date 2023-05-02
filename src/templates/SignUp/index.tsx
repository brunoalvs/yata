import { signIn } from 'next-auth/react'
import { ButtonSocialSign } from '@/components/atoms/ButtonSocialSign'
import { HeadingPage } from '@/components/atoms/HeadingPage'

export default function SignUpTemplate () {
  return (
    <>
      <HeadingPage>Get Started</HeadingPage>
      <p>Create your account using your Google's <br />or Github's account.</p>
      <ButtonSocialSign provider='google' onClick={ () => signIn('google') }>
        Continue with Google
      </ButtonSocialSign>
      <ButtonSocialSign provider='github' onClick={ () => signIn('github') }>
        Continue with GitHub
      </ButtonSocialSign>
      <footer>
        <p>Already have an account?</p>
        <a href='/signin'>Sign In</a>
      </footer>
    </>
  )
}

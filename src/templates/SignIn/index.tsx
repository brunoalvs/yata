import { signIn } from 'next-auth/react'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

import { HeadingPage } from '@/components/atoms/HeadingPage'
import Button from '@/components/atoms/Button'

export default function SignInTemplate () {
  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>Sign In using your Google's <br />or Github's account.</p>

      <Button
        variant='outline'
        icon={ <RiGoogleFill /> }
        onClick={ () => signIn('google') }
      >
        Continue with Google
      </Button>
      <Button
        variant='outline'
        icon={ <RiGithubFill /> }
        onClick={ () => signIn('github') }
      >
        Continue with GitHub
      </Button>

      <footer>
        <p>Don't have an account?</p>
        <a href='/signup'>Sign Up</a>
      </footer>
    </>
  )
}

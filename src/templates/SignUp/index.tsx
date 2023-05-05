import { signIn } from 'next-auth/react'
import Button from '@/components/atoms/Button'
import { HeadingPage } from '@/components/atoms/HeadingPage'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

export default function SignUpTemplate () {
  return (
    <>
      <HeadingPage>Get Started</HeadingPage>
      <p>Create your account using your Google's <br />or Github's account.</p>
      <Button
        icon={ <RiGoogleFill /> }
        variant='outline'
        onClick={ () => signIn('google') }
      >
        Continue with Google
      </Button>
      <Button
        icon={ <RiGithubFill /> }
        variant='outline'
        onClick={ () => signIn('github') }
      >
        Continue with GitHub
      </Button>
      <footer>
        <p>Already have an account?</p>
        <a href='/signin'>Sign In</a>
      </footer>
    </>
  )
}

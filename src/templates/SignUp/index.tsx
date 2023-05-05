import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

import { HeadingPage } from '@/components/atoms/HeadingPage'
import Button from '@/components/atoms/Button'

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
        <Link href='/signin'>Sign In</Link>
      </footer>
    </>
  )
}

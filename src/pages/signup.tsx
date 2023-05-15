import type { ReactNode } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/layouts/Institutional'

const SignUpPage = () => (
  <>
    <HeadingPage>Welcome</HeadingPage>
    <p>We're thrilled that you're considering joining our platform.</p>

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

SignUpPage.getLayout = function getLayout (page: ReactNode) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default SignUpPage

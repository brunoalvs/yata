import type { ReactNode } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { handleSignIn } from '@/utils/handleSignIn'

import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/layouts/Institutional'

const SignUpPage: NextPageWithLayout = () => (
  <>
    <HeadingPage>Welcome</HeadingPage>
    <p>We're thrilled that you're considering joining our platform.</p>

    <Button
      icon={<RiGoogleFill />}
      variant='outline'
      onClick={() => { handleSignIn('google') }}
    >
      Continue with Google
    </Button>
    <Button
      icon={<RiGithubFill />}
      variant='outline'
      onClick={() => { handleSignIn('github') }}
    >
      Continue with GitHub
    </Button>
    <footer>
      <p>Already have an account?</p>
      <Link href='/signin'>Sign In</Link>
    </footer>
  </>
)


SignUpPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Institutional>
      {page}
    </Institutional>
  )
}

export default SignUpPage

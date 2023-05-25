import type { ReactNode } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { handleSignIn } from '@/utils/handleSignIn'

import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/layouts/Institutional'

const SignInPage: NextPageWithLayout = () => (
  <>
    <HeadingPage>Welcome</HeadingPage>
    <p>
      We've made it easy for you to sign in to our platform using <br /> your
      Google or Github account.
    </p>

    <Button
      variant="outline"
      icon={<RiGoogleFill />}
      onClick={() => {
        handleSignIn('google')
      }}
    >
      Continue with Google
    </Button>
    <Button
      variant="outline"
      icon={<RiGithubFill />}
      onClick={() => {
        handleSignIn('google')
      }}
    >
      Continue with GitHub
    </Button>

    <footer>
      <p>Don't have an account?</p>
      <Link href="/signup">Sign Up</Link>
    </footer>
  </>
)

SignInPage.getLayout = function getLayout(page: ReactNode) {
  return <Institutional>{page}</Institutional>
}

export default SignInPage

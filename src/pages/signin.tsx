import { useState, type FormEvent, type ReactNode } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Link from 'next/link'
// import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { signinWithEmailAndPassword } from '@/firebase/auth/signin'

// import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/components/templates/Institutional'
import handleSignInErrorsMessage from '@/utils/handleWithSignInErrors'
import { useRouter } from 'next/router'
import { SignForm } from '@/components/organisms/SignForm'

const SignInPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()

    const { error, result } = await signinWithEmailAndPassword(email, password)

    if (error !== undefined && error !== null) {
      console.error(error)
      alert(handleSignInErrorsMessage(error))
      return
    }

    console.log('User could be signed in successfully', result)
    router.push('/app')
  }

  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>
        We've made it easy for you to sign in to our platform using <br /> your
        Google or Github account.
      </p>

      <SignForm
        onSubmit={(event) => {
          void handleSignIn(event)
        }}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      {/* <Button
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
          handleSignIn('github')
        }}
      >
        Continue with GitHub
      </Button> */}

      <footer>
        <p>Don't have an account?</p>
        <Link href="/signup">Sign Up</Link>
      </footer>
    </>
  )
}

SignInPage.getLayout = function getLayout(page: ReactNode) {
  return <Institutional>{page}</Institutional>
}

export default SignInPage

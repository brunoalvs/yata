import { useState, type FormEvent, type ReactNode } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Link from 'next/link'
// import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { signinWithEmailAndPassword } from '@/firebase/auth/signin'

// import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/layouts/Institutional'

const SignInPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()

    const { error, result } = await signinWithEmailAndPassword(email, password)

    if (error !== undefined && error !== null) {
      console.error(error)
      return
    }

    console.log('User could be signed in successfully', result)
  }

  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>
        We've made it easy for you to sign in to our platform using <br /> your
        Google or Github account.
      </p>

      <form
        onSubmit={(event) => {
          void handleSignIn(event)
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button type="submit">Sign In</button>
      </form>

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

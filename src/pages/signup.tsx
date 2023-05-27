import { useState, type ReactNode, type FormEvent } from 'react'
import { type NextPageWithLayout } from './_app'
import Link from 'next/link'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/layouts/Institutional'

import { signupWithEmailAndPassword } from '@/firebase/auth/signup'
import { handleSignIn } from '@/utils/handleSignIn'

const SignUpPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault()

    const { error } = await signupWithEmailAndPassword(email, password)

    if (error !== undefined && error !== null) {
      console.error(error)
      return
    }

    console.log('User created successfully')
  }

  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>We're thrilled that you're considering joining our platform.</p>

      <form
        onSubmit={(event) => {
          void handleSignUp(event)
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
        <button type="submit">Sign Up</button>
      </form>

      <Button
        icon={<RiGoogleFill />}
        variant="outline"
        onClick={() => {
          handleSignIn('google')
        }}
      >
        Continue with Google
      </Button>
      <Button
        icon={<RiGithubFill />}
        variant="outline"
        onClick={() => {
          handleSignIn('github')
        }}
      >
        Continue with GitHub
      </Button>
      <footer>
        <p>Already have an account?</p>
        <Link href="/signin">Sign In</Link>
      </footer>
    </>
  )
}

SignUpPage.getLayout = function getLayout(page: ReactNode) {
  return <Institutional>{page}</Institutional>
}

export default SignUpPage

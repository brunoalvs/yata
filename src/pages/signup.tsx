import { useState, type ReactNode, type FormEvent } from 'react'
import { type NextPageWithLayout } from './_app'
import Link from 'next/link'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

import Button from '@/components/atoms/Button'
import HeadingPage from '@/components/atoms/HeadingPage'
import Institutional from '@/components/templates/Institutional'

import { signupWithEmailAndPassword } from '@/firebase/auth/signup'
import { handleSignIn } from '@/utils/handleSignIn'
import { useRouter } from 'next/router'
import { SignForm } from '@/components/organisms/SignForm'

const SignUpPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const router = useRouter()

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault()

    const { error } = await signupWithEmailAndPassword(
      email,
      password,
      userName,
    )

    if (error !== undefined && error !== null) {
      console.error(error)
      return
    }

    console.log('User created successfully')
    router.push('/app')
  }

  return (
    <>
      <HeadingPage>Welcome</HeadingPage>
      <p>We're thrilled that you're considering joining our platform.</p>

      <SignForm
        onSubmit={(event) => {
          void handleSignUp(event)
        }}
        setEmail={setEmail}
        setPassword={setPassword}
        setUserName={setUserName}
        type="signup"
      />

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

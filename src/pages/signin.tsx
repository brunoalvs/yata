import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Button } from '@/components/atoms/Button'
import { Sign } from '@/components/organisms/Sign'

import { createFirebaseApp } from '@/utils/firebase/clientApp'
import { useUser } from '@/contexts/userContext'
import { useRouter } from 'next/router'

export default function SignInPage () {
  const { user } = useUser()
  const { push } = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const loginData = {
      email: 'email@mailinator.com',
      password: '123456'
    }

    const firebaseApp = createFirebaseApp()
    const auth = getAuth(firebaseApp)

    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
  }

  if (user) {
    push('/')
  }

  return (
    <Sign
      type='signin'
      onSubmit={ (e) => handleSubmit(e) }
    >
      <legend>Let&apos;s get started!</legend>
      <label htmlFor='email'>Enter your Email</label>
      <input type='email' id='email' />
      <label htmlFor='password'>Enter your Password</label>
      <input type='password' id='password' />
      <Button type='submit' size='large'>Sign In</Button>
    </Sign>
  )
}

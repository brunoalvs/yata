import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { createFirebaseApp } from '@/utils/firebase/clientApp'

import { Button } from '@/components/atoms/Button'
import { Sign } from '@/components/organisms/Sign'
import FormSignUp from '@/components/molecules/FormSignUp'

export default function SignUpPage () {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('submit')

    const newUser = {
      email: '',
      password: '',
      confirmPassword: '',
      username: ''
    }

    // const firebaseApp = createFirebaseApp()
    // const auth = getAuth(firebaseApp)

    // createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    //   .catch((error) => {
    //     console.log(error)
    //   })

  }

  return (
    <Sign
      type='signup'
      onSubmit={ (event) => handleSubmit(event) }
    >
      <FormSignUp />
    </Sign>
  )

  return (
    <Sign
      type='signup'
      onSubmit={ (event) => handleSubmit(event) }
    >
      <legend>Let&apos;s get started!</legend>
      <label htmlFor='email'>Enter your Email</label>
      <input type='email' id='email' required />
      <label htmlFor='password'>Create a Password</label>
      <input type='password' id='password' required />
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input type='password' id='confirmPassword' />
      <label htmlFor='username'>Enter a Username</label>
      <input type='text' id='username' />
      <Button type='submit' size='large'>Sign Up</Button>
    </Sign>
  )
}

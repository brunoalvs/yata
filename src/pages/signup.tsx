import { Button } from '@/components/atoms/Button'
import { Sign } from '@/components/organisms/Sign'

export default function SignUpPage () {
  return (
    <Sign
      type='signup'
      onSubmit={
        (event) => {
          event.preventDefault()
          console.log('Sign Up')
        }
      }
    >
      <legend>Let&apos;s get started!</legend>
      <label htmlFor='email'>Enter your Email</label>
      <input type='email' id='email' />
      <label htmlFor='password'>Create a Password</label>
      <input type='password' id='password' />
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input type='password' id='confirmPassword' />
      <label htmlFor='username'>Enter a Username</label>
      <input type='text' id='username' />
      <Button type='submit' size='large'>Sign Up</Button>
    </Sign>
  )
}

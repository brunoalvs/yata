import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import * as S from './styles'

interface IFormSignUp {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormSignUp = () => {
  const [step, setStep] = useState<number>(1)
  const [form, setForm] = useState<IFormSignUp>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('validateForm', event)
  }

  return (
    <>
      <legend>
        Welcome to Yata!
        <br />
        Let&apos;s get started!
      </legend>
      <S.Label htmlFor='email'>Enter your Email</S.Label>
      <S.Input type='email' id='email' />

      <S.Label htmlFor='name'>Enter your Name</S.Label>
      <S.Input type='text' id='name' />

      <S.Label htmlFor='password'>Create a Password</S.Label>
      <S.Input type='password' id='password' />

      <S.Label htmlFor='confirmPassword'>Confirm Password</S.Label>
      <S.Input type='password' id='confirmPassword' />

      <Button type='submit' size='large'>Sign Up</Button>
    </>
  )
}

export default FormSignUp

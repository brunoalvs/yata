import { useState } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
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
  const [error, setError] = useState<string>('')

  const validateForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('validateForm', event)
    setError('')

    if (step === 1) {
      if (!form.email) {
        setError('email is required')
        return console.log('email is required')
      }

      const emailRegex = [
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      ]

      if (!emailRegex.some(regex => regex.test(form.email))) {
        setError('email is invalid')
        return console.log('email is invalid')
      }

      setStep(2)
    }
  }

  return (
    <>
      <legend>
        Welcome to Yata!
        <br />
        Let&apos;s get started!
      </legend>

      { error && <p>{ error }</p> }

      <S.StepContainer data-active={ step >= 1 }>
        <S.Label htmlFor='email'>Enter your Email</S.Label>
        <Input
          type='email'
          id='email'
          onChange={ e => setForm({ ...form, email: e.target.value }) }
          value={ form.email }
          required
        />
        <Button
          type='button'
          size='medium'
          data-active={ step === 1 }
          onClick={ (event) => validateForm(event) }
        >
          Next
        </Button>
      </S.StepContainer>

      <S.StepContainer data-active={ step >= 2 }>
        <S.Label htmlFor='name'>Enter your Name</S.Label>
        <Input
          type='text'
          id='name'
          required
        />
        <Button
          type='button'
          size='medium'
          data-active={ step === 2 }
          onClick={ () => setStep(3) }
        >
          Next
        </Button>
      </S.StepContainer>

      <S.StepContainer data-active={ step >= 3 }>
        <S.Label htmlFor='password'>Create a Password</S.Label>
        <Input
          type='password'
          id='password'
        />
        <Button
          type='button'
          size='medium'
          data-active={ step === 3 }
          onClick={ () => setStep(4) }
        >
          Next
        </Button>
      </S.StepContainer>

      <S.StepContainer data-active={ step >= 4 }>
        <S.Label htmlFor='confirmPassword'>Confirm Password</S.Label>
        <Input
          type='password'
          id='confirmPassword'
        />
        <Button
          type='button'
          size='medium'
          onClick={ () => setStep(5) }
        >
          Next
        </Button>
      </S.StepContainer>

      <Button type='submit' size='large'>Sign Up</Button>
    </>
  )
}

export default FormSignUp

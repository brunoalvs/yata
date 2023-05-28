import { Input } from '@/components/atoms/Input'
import * as S from './styles'
import Button from '@/components/atoms/Button'

interface SignFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setEmail: (e: string) => void
  setPassword: (e: string) => void
  type?: 'signin' | 'signup'
}

export const SignForm = ({
  onSubmit,
  setEmail,
  setPassword,
  type = 'signin',
}: SignFormProps) => {
  return (
    <S.Container onSubmit={onSubmit}>
      <Input
        label="Email"
        name="email"
        type="email"
        required
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        required
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />

      <Button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</Button>
    </S.Container>
  )
}

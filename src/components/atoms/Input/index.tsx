import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  fullWidth?: boolean
}

const Input = ({ label, fullWidth = false, ...props }: InputProps) => {
  const labelId = label.toLowerCase().replace(' ', '-')

  return (
    <S.Container>
      <S.Label htmlFor={labelId}>{label}</S.Label>
      <S.Input {...props} id={labelId} />
    </S.Container>
  )
}

export default Input

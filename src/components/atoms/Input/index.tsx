import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={props.name}>{label}</S.Label>
      <S.Input {...props} />
    </S.Container>
  )
}

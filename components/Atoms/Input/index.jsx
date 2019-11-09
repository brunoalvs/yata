import * as S from './styles'

const Input = ({ type, variant }) => (
  <S.Input autoFocus type={type} placeholder={type} className={variant} />
)

Input.defaultProps = {
  type: 'text'
}

export default Input

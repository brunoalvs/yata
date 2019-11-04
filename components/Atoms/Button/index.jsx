//TODO: Add props to color definition
import * as S from './styles'

export const Button = ({ children, variant }) => (
  <S.Button className={variant}>{children}</S.Button>
)

export default Button

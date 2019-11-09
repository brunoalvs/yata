// TODO: Button Contained as Default Button
// TODO: Create Text Button variant
// TODO: Add props to color definition

import * as S from './styles'

export const Button = ({ children, variant, disabled }) => (
  <S.Button className={variant} disabled={disabled}>
    {children}
  </S.Button>
)

export default Button

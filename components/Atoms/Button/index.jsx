import * as S from './styles'

export const Button = ({ children }) => <S.Button>{children}</S.Button>
export default Button

export const Outlined = ({ children }) => (
  <S.Button outlined>{children}</S.Button>
)
export const Contained = ({ children }) => <S.Contained>{children}</S.Contained>

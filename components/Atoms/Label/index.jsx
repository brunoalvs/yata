import { Container } from './styles'

const Label = ({ children }) => <Container>{children}</Container>

Label.defaultProps = {
  children: 'childrenText'
}

export default Label

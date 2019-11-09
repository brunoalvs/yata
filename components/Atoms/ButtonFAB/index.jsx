import { Add } from 'styled-icons/material'
import { Container, Icon } from './styles'

const ButtonFAB = ({ variant }) => (
  <Container className={variant}>
    <Icon>
      <Add title="Fab Icon" />
    </Icon>
  </Container>
)

ButtonFAB.defaultProps = {
  variant: 'normal'
}

export default ButtonFAB

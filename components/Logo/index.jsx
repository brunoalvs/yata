import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 100px;
  cursor: pointer;

  > img {
    width: 100%;
  }
`

const Logo = () => (
  <>
    <Link href="/">
      <Container>
        <img src="Logo.svg" alt="Logo" />
      </Container>
    </Link>
  </>
)

export default Logo

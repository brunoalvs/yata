import MyLayout from '../components/Layout'
import styled, { keyframes } from 'styled-components'

const Welcome = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #e7e7e8 100%);

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const keyFrameAnimate = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Aviso = styled.p`
  margin-top: 1rem;
  padding: 0.5rem;

  font-size: 1.5rem;
  color: var(--textcolor);
  animation: ${keyFrameAnimate} 2s ease-in;
`

const Home = () => (
  <MyLayout>
    <Welcome>
      <img src="/Logo.svg" className="App-Logo" alt="Logo" />
      <Aviso>development...</Aviso>
    </Welcome>
  </MyLayout>
)

export default Home

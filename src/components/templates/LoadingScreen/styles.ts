import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-primary);
  color: var(--text);
`

export const Logo = styled.section`
  display: flex;
  algin-items: center;
  margin-bottom: 2rem;
`

export const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-left: 1rem;
`

const blink = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const LoadingMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  animation: ${blink} 500ms linear infinite alternate;
`

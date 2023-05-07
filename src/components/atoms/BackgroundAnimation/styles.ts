import styled, { keyframes } from 'styled-components'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(10, 20, 70, 1);
  position: fixed;
`

export const Overlay = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1;
  background-image: url('/noise.png');
  background-size: 120px 120px;
  backdrop-filter: blur(12rem);
`

export const Element = styled.div`
  width: 100%;
  height: 80%;
  max-height: 100vw;
  background: #271a3f;
  border-radius: 50%;
  position: fixed;
  inset: 10% 0;
  animation: ${rotate} 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite forwards;
  will-change: transform;

  &::after,
  &::before {
    content: '';
    position: absolute;
    inset: 0;
  }

  &::after {
    width: 30rem;
    height: 20rem;
    background-color: #9f2ac8;
    border-radius: 20%;
    animation: ${rotate} 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite forwards;
  }

  &::before {
    width: 20rem;
    height: 70rem;
    background-color: #9e6bff;
    border-radius: 50%;
    animation: ${rotate} 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite forwards;
    margin: auto;
  }
`

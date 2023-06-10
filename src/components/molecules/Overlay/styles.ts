import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div<{ open: boolean; hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 1;
  animation: ${fadeIn} 200ms ease-in-out;

  ${(props) => props.open && `display: block;`}
  ${(props) => props.hidden && `background-color: transparent;`}
`

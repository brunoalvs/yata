import type { OverlayProps } from './'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  cursor: pointer;
  z-index: 1;
  animation: ${fadeIn} 200ms ease-in-out;

  ${({ isOpen }) => isOpen && `
    display: block;
  `}
`

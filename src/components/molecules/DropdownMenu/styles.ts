import styled from 'styled-components'

export const Container = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 100ms ease-in;
  z-index: var(--z-index-modal);
  will-change: transform;

  > li {
    opacity: 0;
    transition: opacity 50ms ease-in;
    will-change: opacity;
  }

  &[aria-hidden="true"] {
    transform: scaleY(1);
    transition-timing-function: ease-out;

    > li {
      opacity: 1;
      transition: opacity 250ms ease-out;
    }
  }
`

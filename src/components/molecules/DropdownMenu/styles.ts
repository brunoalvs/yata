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

  border: 1px dashed goldenrod;
  width: 100%;
  max-width: 18rem;
  background-color: purple;
  display: grid;
  gap: 0.5rem;

  &[aria-hidden='true'] {
    transform: scaleY(1);
    transition-timing-function: ease-out;
  }
`

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 4rem;
  font-size: 1.6rem;
  padding: 0 1.6rem;
  opacity: 0;
  transition: opacity 50ms ease-in;
  will-change: opacity;

  &[aria-hidden='true'] {
    opacity: 1;
    transition: opacity 250ms ease-out;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  max-width: 18rem;
  display: grid;
  gap: 0.5rem;
  background-color: var(--background-primary);
  box-shadow: 0 0 0.5rem var(--background-primary);

  position: absolute;
  top: 100%;
  right: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 100ms ease-in;
  z-index: var(--z-index-modal);
  will-change: transform;

  &[aria-hidden='true'] {
    transform: scaleY(1);
    transition-timing-function: ease-out;
  }
`

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
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
    background-color: var(--element-hover);
  }

  &:active {
    background-color: var(--element-active);
  }
`

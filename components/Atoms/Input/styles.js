import styled from 'styled-components'

export const Input = styled.input`
  font-size: 1em;
  font-weight: normal;

  color: var(--textcolor-light);
  padding: 0.5em 0.2em;

  background-color: rgba(255, 255, 255, 0.75);
  border: 0;
  border-radius: 0.25em 0.25em 0 0;
  overflow: hidden;
  border-bottom: 2px solid darkgray;

  outline: 0;
  transition: all 0.3s ease;

  &:hover {
    border-color: gray;
  }
  &:focus,
  &:active {
    background-color: var(--background);
    color: var(--textcolor-dark);
    border-color: var(--primary);
  }

  &.outlined {
    background: transparent;
  }
`

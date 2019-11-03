import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.3em;
  padding: 0.25em 1em;

  font-size: 1em;
  font-weight: normal;

  ${props =>
    props.outlined &&
    css`
      border-color: var(--primary);
      color: var(--primary);
    `}
`

export const Contained = styled(Button)`
  background: var(--primary);
  color: white;
  &:hover {
    background: var(--primary-accent);
  }
`

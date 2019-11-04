import styled from 'styled-components'

export const Button = styled.button`
  color: var(--primary);
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.3em;
  padding: 0.25em 1em;

  font-size: 1em;
  font-weight: normal;

  &.outlined {
    border-color: var(--primary);
    color: var(--primary);
  }

  &.contained {
    background: var(--primary);
    color: white;
  }

  &.raised {
    background: var(--primary);
    color: white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
`

// export const Outlined = styled(Button)`
//   border-color: var(--primary);
//   color: var(--primary);
// `

// export const Contained = styled(Button)`
//   background: var(--primary);
//   color: white;
//   &:hover {
//     background: var(--primary-accent);
//   }
// `

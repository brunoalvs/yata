import styled, { css } from 'styled-components'

export const Button = styled.button.attrs(props => ({
  disabled: props.disabled || false
}))`
  color: var(--primary);
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.3em;
  padding: 0.5em 1em;

  font-size: 1em;
  font-weight: normal;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    filter: saturate(150%);
  }

  &:active {
    filter: brightness(150%);
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(100%);
      cursor: not-allowed;

      &:hover {
        filter: grayscale(100%) contrast(200%);
      }
    `}

  &.outlined {
    border-color: var(--primary);
    color: var(--primary);

    &:hover {
      background-color: var(--background-contrast);
    }
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

import styled, { css } from 'styled-components'

const fadeIn = css`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.form(
  ({ theme }) => css``
)

export const StepContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: none;
    grid-template-columns: 1fr max-content;
    grid-gap: 1rem;

    &[data-active='true'] {
      display: grid;
    }

    button {
      opacity: 0;
      pointer-events: none;
    }

    button[data-active='true'] {
      opacity: 1;
      pointer-events: all;
      animation: ${fadeIn} 0.5s ease-in-out;
    }

    input {
      background: transparent;
      color: ${theme.colors.text};

      &:active {
        outline: 1px solid ${theme.colors.primary[300]};
      }
    }

  `
)

export const Label = styled.label(
  ({ theme }) => css`
    flex: 1;
    grid-column: 1 / 3;
  `
)

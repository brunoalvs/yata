import styled, { css } from 'styled-components'

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: center;

  `
)

export const Container = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    padding: 2rem;
  `
)

export const Heading = styled.h1(
  ({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
  `
)

export const Paragraph = styled.p(
  ({ theme }) => css`
    max-width: 80%;
    font-family: ${theme.typography.fontFamily};
    text-align: center;

    > a {
      color: ${theme.colors.primary[300]};

      &:hover {
        color: ${theme.colors.primary[400]};
      }
    }
  `
)

export const Button = styled.button(
  ({ theme }) => css`
    background: ${theme.colors.primary[500]};
    color: ${theme.colors.text};
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: ${theme.typography.fontFamily};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.primary[400]};
    }
  `
)

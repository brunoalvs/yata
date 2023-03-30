import styled, { css } from 'styled-components'

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.background};
    background-image: url('https://images.unsplash.com/photo-1663970206579-c157cba7edda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: ${theme.colors.text};
  `
)
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* add blur on background */
  background-color: rgba(0, 0, 0, .75);
  backdrop-filter: blur( 0.75rem );

`

export const Header = styled.header(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  `
)

export const HeaderRight = styled.section(
  ({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.textSecondary};

    a {
      color: ${theme.colors.text};
      padding: .5rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `
)

export const Content = styled.div(
  ({ theme }) => css`
    border: 1px solid rgba(50, 50, 50, .25);
    width: 100%;
    max-width: 60rem;
    height: 100%;
    background: ${theme.colors.overlay};
    border-radius: .5rem;
    font-size: 2rem;
    padding: 3rem 2rem;
  `
)

export const Form = styled.form(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    legend {
      color: ${theme.colors.textSecondary};
      font-size: 2.4rem;
      font-weight: ${theme.typography.fontWeight.semibold};
      margin-bottom: 1rem;
      padding: 2rem 0;
    }
  `
)

export const Footer = styled.footer(
  ({ theme }) => css`
  max-width: 60rem;
  padding: 4rem 2rem;

  color: ${theme.colors.textSecondary};
  font-size: 1.2rem;
  line-height: ${theme.typography.lineHeight.base};

  a {
    color: ${({ theme }) => theme.colors.text};
  }
`
)

import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    /* overflow-x: hidden; */

    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.typography.fontFamily};

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: max-content 1fr max-content;
    }
  `
)

interface RightAsideProps {
  rightAsideIsOpen: boolean;
}

export const Content = styled.main<RightAsideProps>(
  () => css`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2rem;
  `
)



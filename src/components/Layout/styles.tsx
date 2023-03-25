import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    border: 1px solid;
    border-color: red;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    overflow-x: hidden;

    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.typography.fontFamily};
  `
)

export const Aside = styled.aside(
  ({ theme }) => css`
    border: 1px dashed;
    border-color: yellow;

    background-color: ${theme.colors.aside};
    /* width: 0; */
    min-width: 20rem;
    max-width: 25rem;
    /* transform: translateX(-100%); */

    padding: 1rem;
  `
)

export const Content = styled.main<RightAsideProps>(
  ({ theme }) => css`
    border: 1px dashed;
    border-color: green;
    /* width: 100vw; */

    /* flex: 1; */
    padding: 2rem;
  `
)

interface RightAsideProps {
  rightAsideIsOpen: boolean;
}


export const RightAside = styled.aside<RightAsideProps>(
  ({ theme, rightAsideIsOpen }) => css`
    border: 1px dashed;
    border-color: hotpink;

    width: ${rightAsideIsOpen ? '25rem' : '0'};
    transform: ${rightAsideIsOpen ? 'translateX(0)' : 'translateX(100%)'};

    transition: transform 0.3s ease-in-out, width 0.1s ease-in-out;
  `
)

export const RightAsideHeader = styled.header(
  ({ theme }) => css`
    border: 1px dashed;
    border-color: limegreen;
  `
)

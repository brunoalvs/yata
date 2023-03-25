import styled, { css } from 'styled-components'

interface AsideProps {
  isOpen: boolean;
}

export const Container = styled.section<AsideProps>(
  ({ theme, isOpen }) => css`
    border: 1px dashed yellow;
    /* background-color: #000; */
    /* min-height: 100vh; */

    @media (max-width: ${ theme.breakpoints.md }) {
      position: fixed;
      top: 0;
      left: 0;
      width: 20rem;
      height: 100vh;
      background-color: #000;
      transform: ${ isOpen ? 'translateX(0)' : 'translateX(-100%)' };
      transition: transform 0.3s ease-in-out;
      z-index: 2;
    }

    @media (min-width: ${ theme.breakpoints.md}) {
      min-width: 20rem;
      max-width: 25rem;
    }

  `
)

export const Overlay = styled.div<AsideProps>(
  ({ theme, isOpen }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      cursor: pointer;
      transform: ${ isOpen ? 'translateX(0%)' : 'translateX(-100%)' };
    }

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `
)

import styled, { css } from 'styled-components'

interface RightAsideProps {
  isOpen: boolean;
}

export const Container = styled.section<RightAsideProps>(
  ({ theme, isOpen }) => css`
    border: 1px solid orange;

    @media (max-width: ${ theme.breakpoints.md}) {
      position: fixed;
      top: 0;
      right: 0;
      width: 30rem;
      height: 100vh;
      background-color: #000;
      transform: ${ isOpen ? 'translateX(0)' : 'translateX(100%)' };
      transition: transform 0.3s ease-in-out;
      z-index: 2;
    }

    @media (min-width: ${ theme.breakpoints.md}) {
      width: ${ isOpen ? '30rem' : '0' };
      max-width: 30rem;
      height: 100%;
      background-color: #181818;
      transform: ${ isOpen ? 'translateX(0)' : 'translateX(100%)' };
      transition: transform 0.1s ease-in-out;
    }
  `
)

export const Overlay = styled.div<RightAsideProps>(
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
      transform: ${ isOpen ? 'translateX(0%)' : 'translateX(100%)' };
    }

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `
)

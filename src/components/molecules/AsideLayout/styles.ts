import styled, { css } from 'styled-components'

interface AsideProps {
  isOpen: boolean
  direction: 'left' | 'right'
}

export const Container = styled.aside<AsideProps>(
  ({ theme, isOpen, direction }) => css`
    width: ${direction === 'left' ? '20rem' : '30rem'};
    max-width: 100vw;
    min-height: 100vh;
    background: ${direction === 'left' ? '#000' : '#181818'};

    @media (max-width: ${theme.breakpoints.md}) {
      position: fixed;
      top: 0;
      ${direction === 'left' ?  css`
        left: 0;
        transform: translateX(${isOpen ? '0' : '-100%'});
      ` : css`
        right: 0;
        transform: translateX(${isOpen ? '0' : '100%'});
      `}
      transition: transform 0.3s ease-in-out;
      z-index: 2;
    }

    ${direction === 'right' && css`
      transform: ${ isOpen ? 'translateX(0)' : 'translateX(100%)' };
      transition: transform 0.2s ease-in-out;
    `}

  `
)

export const Overlay = styled.div<AsideProps>(
  ({ theme, isOpen, direction }) => css`
    @media (max-width: ${theme.breakpoints.md}) {
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      position: fixed;
      top: 0;
      left: 0;
      transform: translateX(${isOpen ? '0' : direction === 'left' ? '-100%' : '100%'});
      z-index: 1;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `
)

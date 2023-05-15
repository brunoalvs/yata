import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--background-primary);
  background-image: url('/noise.png');
  background-size: 120px 120px;
  color: var(--text);

  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: minmax(14rem, 22rem) 1fr max-content;
  }
`

export const Content = styled.article`
  width: 100%;
  min-width: 20rem;
  max-height: 100vh;
  font-size: medium;
  overflow-y: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-secondary);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-secondary);
    border-radius: 0.5rem;
  }
`

export const Drawer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-secondary);
  transition: transform 200ms ease;
  z-index: var(--z-index-drawer);

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);

    &[data-open="true"] {
      width: 80%;
      padding: 0.5rem;
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    transform: translateX(100%);

    &[data-open="true"] {
      min-width: 26rem;
      padding: 0.5rem;
      transform: translateX(0);
    }
  }
`

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  background-color: rgba(10, 20, 70, 1);
  z-index: 1;
`

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  align-items: center;
  color: var(--white);
  position: relative;
  overflow-x: hidden;
  z-index: var(--z-index-base);
`

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  place-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 2rem;

  @media (min-width: 768px) {
    padding: 2.4rem 4.8rem;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > a {
    color: var(--white);
    font-size: large;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  font-size: large;
  padding: 2.4rem 2rem;
  line-height: 2.4rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.4rem 4.8rem;
  }

  > h1 {
    color: var(--white);
    font-size: xx-large;
    margin-bottom: 2rem;
  }

  > a {
    margin-top: 2rem;
  }

  > p {
    max-width: 80rem;
  }

  > footer {
    padding: 4rem 1.5rem;
    display: flex;
    gap: 1rem;

    a {
      color: var(--white);
      opacity: 0.8;
      font-weight: bold;
      text-decoration: underline;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
`

export const Footer = styled.footer`
  text-align: center;
  opacity: 0.5;
  padding: 1.2rem 4.8rem;
`

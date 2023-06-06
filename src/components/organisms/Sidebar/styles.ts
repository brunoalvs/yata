import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background-color: var(--background-secondary);
  background-image: url('/noise.png');
  background-size: 100px;
  border-right: 1px solid var(--element-active);
  padding: 2rem 1rem 0.5rem;

  @media (max-width: 767px) {
    width: 80%;
    height: 100%;
    backdrop-filter: blur(9rem);
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    z-index: 10;

    &[data-open='true'] {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(3, max-content);
  }
`
export const Header = styled.header`
  @media (min-width: 768px) {
    > button:first-of-type {
      display: none;
      visibility: hidden;
    }
  }
`

export const Content = styled.section`
  overflow-y: auto;

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

export const List = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 4.5rem;
  padding: 0.5rem 0;
  overflow-y: auto;

  &:not(:last-child) {
    border-bottom: 1px solid var(--element-active);
  }
`

export const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: medium;
  color: var(--text-sidebar);
  padding: 1rem;
  text-decoration: none;
  position: relative;

  &:active {
    background-color: var(--element-active);
  }

  &::after {
    content: '';
    display: block;
    width: 0.4rem;
    height: 100%;
    background: var(--transparent);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%) scale(0);
    transition: background 0.5s ease;
  }

  &[data-current='true'] {
    background-color: var(--element-hover);
    color: var(--primary-500);

    &::after {
      background: linear-gradient(
        0deg,
        var(--transparent) 0%,
        var(--primary-500) 50%,
        var(--transparent) 100%
      );
      transition: background 0.5s ease, transform 0.25s ease;
      transform-origin: left;
      transform: translateX(0) scale(1);
    }
  }

  &:not([data-current='true']):hover {
    background-color: var(--element-hover);
    color: var(--text);
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 4.5rem;
  display: grid;
  grid-template-columns: 1fr max-content;
  border-top: 1px solid var(--element-visible);
  color: var(--text);

  > button {
    color: currentColor;
  }
`

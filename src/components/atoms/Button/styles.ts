import styled from 'styled-components'

export const Button = styled.button<{ variant?: 'default' | 'outline' | 'text', size?: 'large' | 'small' }>`
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 1rem 1.2rem;
  background-color: var(--primary-500);
  border: 0.2rem solid var(--primary-500);
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: background 200ms ease;

  &:hover,
  &:focus-visible {
    background-color: var(--primary-600);
  }

  > span {
    width: 33.333%;
    height: 100%;
    position: absolute;
    background: transparent;
    opacity: 0.5;
    z-index: -1;
  }

  > :first-child {
    left: 0;
    top: 0;
  }

  > :last-child {
    right: 0;
    top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: var(--primary-800);
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;
    inset: 0;
    margin: auto;
    opacity: 0;
    transition: transform 500ms, opacity 200ms;
  }

  &:active::before {
    transform: scale(20);
    opacity: 1;
    transition: transform 500ms, opacity 250ms;
  }

  &:has(:first-child:active)::before {
    margin-left: 0;
  }

  &:has(:last-child:active)::before {
    margin-right: 0;
  }

  &:has(:first-child:active)::before,
  &:has(:last-child:active)::before {
    transition: transform 250ms, opacity 125ms;
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }

  ${({ variant }) => {
    switch (variant) {
    case 'outline':
      return `
          background-color: transparent;
          color: white;
          border-color: white;

          &:hover,
          &:focus-visible {
            background-color: var(--primary-800);
          }

          &::before {
            background-color: rgba(255, 255, 255, 1);
          }

          &:active {
            color: var(--primary-800);
          }
        `
    case 'text':
      return `
          background-color: transparent;
          border-color: transparent;
          color: white;

          &:hover,
          &:focus-visible {
            background-color: var(--element-hover);
            border-color: transparent;
          }

          &::before {
            background-color: var(--element-active);
          }
        `
    default:
      return `
          color: white;
        `
    }
  }}

  ${({ size }) => {
    switch (size) {
    case 'small':
      return 'font-size: small;'
    default:
      return 'font-size: large;'
    }
  }}
`

import styled from 'styled-components'

export const Container = styled.div`
  background: var(--primary);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  transition: all 0.2s ease-in;

  &.normal {
    width: 70px;
    height: 70px;
  }

  &.mini {
    width: 60px;
    height: 60px;
  }

  &:hover {
    filter: brightness(130%);
  }
`

export const Icon = styled.span`
  width: 22px;
  height: 22px;

  overflow: hidden;
  color: white;

  > svg {
    transform: scale(2);
  }
`

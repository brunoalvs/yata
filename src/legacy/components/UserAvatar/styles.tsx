import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    width: 4.5rem;
    height: 4.5rem;

    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 180%;
      font-weight: ${theme.typography.fontWeight.medium};
      color: ${theme.colors.text};
      background: ${theme.colors.primary[600]};
    }
  `
)

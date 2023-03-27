import type { DefaultTheme } from 'styled-components'
import styled, { css } from 'styled-components'
import type { ButtonProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.typography.fontSize.xs};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.typography.fontSize.base};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.typography.fontSize.lg};
  `,
  fullWidth: () => css`
    width: 100%;
  `,

}

export const Wrapper = styled.button<ButtonProps>(
  ({ theme, size, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary[500]};
    border: 0;
    border-radius: .5rem;
    color: ${theme.colors.text};
    cursor: pointer;
    padding: 1rem 2rem;

    &:hover {
      background: ${theme.colors.primary[600]};
      transition: all .2s ease;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `
)


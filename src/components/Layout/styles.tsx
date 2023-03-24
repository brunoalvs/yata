import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  `
)

export const Header = styled.header(
  ({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.textSecondary};
    display: flex;
    justify-content: space-between;
  `
)

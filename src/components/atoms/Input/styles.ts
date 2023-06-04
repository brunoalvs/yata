import styled from 'styled-components'

export const Container = styled.fieldset`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  text-align: left;
`

export const Label = styled.label`
  color: #fff;
  font-size: 2rem;
  padding-bottom: 0.6rem;
`

export const Input = styled.input<{
  fullWidth?: boolean
}>`
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.2rem solid rgba(200, 200, 200, 0.3);
  border-radius: 0.4rem;
  color: #d9d9d9;
  font-size: 2rem;
  padding: 1.2rem;

  &:focus {
    border-color: #9e6bff;
    outline: none;
  }

  ${({ fullWidth }) =>
    fullWidth === true &&
    `
      width: 100%;
    `}
`

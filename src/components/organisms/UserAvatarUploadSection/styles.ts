import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
`

export const WrapperAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > input[type='file'] {
    display: none;
  }
`

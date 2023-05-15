import styled from 'styled-components'

export const Container = styled.section`
  border: 1px dashed goldenrod;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.2rem;
  align-items: center;
`

export const UserName = styled.p`
  text-align: initial;
  width: 100%;
  white-space: nowrap;
  line-height: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text);
  font-size: 2rem;
  font-weight: 600;
`

import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.2rem;
  align-items: center;
`

export const UserInfoWrapper = styled.div`
  display: grid;
  gap: 0.8rem;
  align-items: flex-start;
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

export const UserEmail = styled.p`
  text-align: initial;
  width: 100%;
  white-space: nowrap;
  line-height: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text);
  font-size: 1.4rem;
  font-weight: 400;
`

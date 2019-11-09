import styled from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;

  display: grid;
  grid-template-rows: 60px 100%;

  background: var(--primary);

  > header {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1em;
  }

  > .content {
    padding: 1em;
    border: 1px solid yellow;
  }
`

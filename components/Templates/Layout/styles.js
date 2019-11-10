import styled from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 60px calc(100% - 60px);

  background: var(--primary-accent);

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

import styled from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 60px calc(100% - 60px);

  background: var(--background);

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 1em;
    border-bottom: 1px solid var(--shadow-color);
  }

  > .content {
    padding: 1em;
  }
`

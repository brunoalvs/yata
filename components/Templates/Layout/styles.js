import styled from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;

  background: var(--background);

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 1em;
    /* border-bottom: 1px solid var(--shadow-color); */
  }

  > .content {
    padding: 0 1em;
  }
`

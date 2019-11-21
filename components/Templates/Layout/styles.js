import styled, {keyframes} from 'styled-components'

export const Grid = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  grid-gap: 1em;

  background: var(--background);
  position: relative;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1em;
    /* border-bottom: 1px solid var(--shadow-color); */
  }

  > .content {
    width: calc(100% - 2em);
    margin: 0 auto;

    background-color: var(--background-contrast);
    border-radius: 1em 1em 0 0;
    padding: 1em;
    overflow: auto;

    animation: contentLoad .5s ease-out;
  }

  @keyframes contentLoad {
    0% {
      opacity: 0;
      transform: translateY(100%);
    } 100% {
      opacity: 1;
      transform: translateY(0);

    }
  }
`

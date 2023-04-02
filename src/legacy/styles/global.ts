import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
  }
`

export default GlobalStyle

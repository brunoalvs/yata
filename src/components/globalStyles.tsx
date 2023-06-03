import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
    --black: #0a0a0a;
    --white: #fdfdfd;

    --primary-500: #6374f1;
    --primary-600: #4f63e6;
    --primary-700: #4055db;
    --primary-800: #2d3bb8;
    --primary-900: #1d2766;

    --z-index-base: 100;
    --z-index-drawer: 1010;
    --z-index-modal: 1050;

    --background-primary: #16171b;
    --background-secondary: rgba(33, 33, 36, 0.9);

    --text: #ececec;
    --text-secondary: #8a8a8a;
    --text-sidebar: #aaaaaa;

    --skeleton-from: hsl(200, 20%, 20%);
    --skeleton-to: hsl(200, 20%, 15%);

    --element-hover: rgba(0, 0, 0, 0.2);
    --element-active: rgba(0, 0, 0, 0.3);
    --element-visible: rgba(255, 255, 255, 0.1);
  }
`

export default GlobalStyle

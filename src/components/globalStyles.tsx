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

    --primary-500: #6366f1;
    --primary-600: #4f46e5;
    --primary-700: #4338ca;
    --primary-800: #3730a3;
    --primary-900: #312e81;

    --z-index-base: 100;
    --z-index-drawer: 1010;
    --z-index-modal: 1050;
  }

  [data-theme="dark"] {
    --background-primary: #16171b;
    --background-secondary: #212124;

    --text: #ececec;
    --text-secondary: #8a8a8a;
    --text-sidebar: #aaaaaa;

    --skeleton-from: hsl(200, 20%, 20%);
    --skeleton-to: hsl(200, 20%, 15%);

    --element-hover: rgba(0, 0, 0, 0.1);
    --element-active: rgba(0, 0, 0, 0.3);
  }

  [data-theme="light"] {
    --background-primary: #fdfdfd;
    --background-secondary: #f0efef;

    --text: #252525;
    --text-secondary: #696969;
    --text-sidebar: #858585;

    --skeleton-from: hsl(200, 20%, 80%);
    --skeleton-to: hsl(200, 20%, 95%);

    --element-hover: rgba(0, 0, 0, 0.1);
    --element-active: rgba(0, 0, 0, 0.3);
  }

`

export default GlobalStyle

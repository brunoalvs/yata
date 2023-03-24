import { createGlobalStyle } from 'styled-components'

interface IGlobalStyleProps {
  theme: {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
    },
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    },
    typography: {
      fontFamily: string
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
  }
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
`

export default GlobalStyle

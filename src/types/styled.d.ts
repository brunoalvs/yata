import 'styled-components'

interface Colors {
  primary: {
    500: string
    600: string
    700: string
    800: string
    900: string
  },
  black: string,
  white: string,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
  }
}

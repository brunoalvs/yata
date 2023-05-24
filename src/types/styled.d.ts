import 'styled-components'

interface Colors {
  primary: {
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  black: string
  white: string
  background: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
    secondary: string
    sidebar: string
  }
  skeleton: {
    from: string
    to: string
  }
  element: {
    hover: string
    active: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    zIndex: {
      base: number
      modal: number
    }
  }
}

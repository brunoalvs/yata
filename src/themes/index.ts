import type { DefaultTheme } from 'styled-components'
import breakpoints from './breakpoints'
import { colorsDarkTheme, colorsLightTheme } from './colors'
import typography from './typography'

export const darkTheme: DefaultTheme = {
  colors: colorsDarkTheme,
  breakpoints,
  typography,
}

export const lightTheme: DefaultTheme = {
  colors: colorsLightTheme,
  breakpoints,
  typography,
}

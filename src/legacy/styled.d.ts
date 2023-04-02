import 'styled-components'
import type { IColors, IBreakpoints, ITypography } from './themes/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    typography: ITypography
    breakpoints: IBreakpoints
  }
}

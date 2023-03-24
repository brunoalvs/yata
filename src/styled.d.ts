import 'styled-components'
import type { Theme, IColors } from './themes/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    typography: Theme.ITypography
    breakpoints: Theme.IBreakpoints
  }
}

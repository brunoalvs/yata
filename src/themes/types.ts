export type ColorRange = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface IDefaultColors {
  textSecondary: string
  gradient: string
  black: string
  error: string
  success: string
  warning: string
  info: string
}

export interface IColors extends IDefaultColors {
  primary: ColorRange
  secondary: ColorRange
  background: string
  aside: string
  overlay: string
  text: string
}

export interface ITypography {
  fontFamily: string
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeight: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
  }
  letterSpacing: {
    tighter: string
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
}

export interface IBreakpoints {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface Theme {
  colors: IColors
  typography: ITypography
  breakpoints: IBreakpoints
}

import type { IColors, ColorRange, IDefaultColors } from './types'

const primaryColor: ColorRange = {
  50: '#f0f5ff',
  100: '#d6e4ff',
  200: '#adc6ff',
  300: '#85a5ff',
  400: '#597ef7',
  500: '#2f54eb',
  600: '#1d39c4',
  700: '#10239e',
  800: '#061178',
  900: '#030852',
}

const secondaryColor: ColorRange = {
  50: '#f9f0ff',
  100: '#efdbff',
  200: '#d3adf7',
  300: '#b37feb',
  400: '#9254de',
  500: '#722ed1',
  600: '#531dab',
  700: '#391085',
  800: '#22075e',
  900: '#120338',
}

const defaultColors: IDefaultColors = {
  black: '#000',
  textSecondary: '#636076',
  gradient: 'linear-gradient(90deg, #2f54eb 0%, #722ed1 100%)',
  error: '#f5222d',
  success: '#52c41a',
  warning: '#faad14',
  info: '#1890ff',
}

export const colorsLightTheme: IColors = {
  primary: primaryColor,
  secondary: secondaryColor,
  background: 'linear-gradient(180deg, #FFFFFF 0%, #E7E7E8 100%)',
  aside: '#fff',
  overlay: 'rgba(0, 0, 0, 0.5)',
  text: '#000',
  ...defaultColors,
}

export const colorsDarkTheme: IColors = {
  primary: primaryColor,
  secondary: secondaryColor,
  background: 'linear-gradient(-45deg,#100f11 0%,#000 100%)',
  aside: '#000',
  overlay: 'rgba(0, 0, 0, 0.5)',
  text: '#fff',
  ...defaultColors
}

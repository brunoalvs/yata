import type { ThemeConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const colors = {
  brand: {
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
  },
}

const theme = extendTheme({ config, colors })

export default theme

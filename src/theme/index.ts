import { DefaultTheme } from 'styled-components'
import { Colors } from '@kevinrodriguez-io/pigment-core'

export const theme: DefaultTheme = {
  colors: {
    primary: Colors.flatMint.light,
    danger: Colors.flatRed.light,
    warning: Colors.flatYellow.dark,
    success: Colors.flatGreen.dark,
    text: Colors.flatBlack.dark,
    white: Colors.flatWhite.light,
    disabled: '#ddd',
  },
}

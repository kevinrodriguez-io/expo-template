import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      danger: string
      warning: string
      success: string
      text: string
      white: string
      disabled: string
    }
  }
}

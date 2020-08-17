import 'react-redux'
import { RootState } from 'reducers'

declare module 'react-redux' {
  export interface DefaultRootState extends RootState
}

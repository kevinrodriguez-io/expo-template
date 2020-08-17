import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthSliceState = {
  isAuthenticated: boolean
  isLoading: boolean
}

const initialState: AuthSliceState = {
  isLoading: true,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticationValues(state, action: PayloadAction<AuthSliceState>) {
      state = action.payload
    },
  },
})

export const { setAuthenticationValues } = authSlice.actions

export default authSlice.reducer

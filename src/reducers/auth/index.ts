import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthSliceState = {
  isAuthenticated: boolean
  isLoading: boolean
}

const initialState: AuthSliceState = {
  isLoading: true,
  isAuthenticated: false,
}

const medicalHistory = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticationValues(state, action: PayloadAction<AuthSliceState>) {
      state = action.payload
    },
  },
})

export const { setAuthenticationValues } = medicalHistory.actions

export default medicalHistory.reducer

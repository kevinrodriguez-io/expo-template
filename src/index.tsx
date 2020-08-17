import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootReducer from 'reducers'
import { setAuthenticationValues } from 'reducers/auth'

import { LoadingStackNavigator } from 'navigation/LoadingStackNavigator'
import { MainStackNavigator } from 'navigation/Main/StackNavigator'
import { WelcomeStackNavigator } from 'navigation/Welcome/WelcomeStackNavigator'
import { ThemeProvider } from 'styled-components/native'

import { theme } from 'theme'

const store = configureStore({
  reducer: rootReducer,
})

const DEMO_IS_AUTHENTICATED = true

const Skippy: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
      setIsAuthenticated(true)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  const renderNavigation = (isLoading: boolean, isAuthenticated: boolean) => {
    if (isLoading) return <LoadingStackNavigator />
    if (!isAuthenticated) return <WelcomeStackNavigator />
    return <MainStackNavigator />
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {renderNavigation(isLoading, isAuthenticated)}
      </NavigationContainer>
    </>
  )
}

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Skippy />
      </Provider>
    </ThemeProvider>
  )
}

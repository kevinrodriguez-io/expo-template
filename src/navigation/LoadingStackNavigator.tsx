import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Loading } from 'views/Loading'

const Stack = createStackNavigator()

export const LoadingStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LOADING"
      component={Loading}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
)

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from 'views/Welcome'

const Stack = createStackNavigator()

export const WelcomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WELCOME"
      component={Welcome}
      options={{ header: () => null }}
    />
  </Stack.Navigator>
)

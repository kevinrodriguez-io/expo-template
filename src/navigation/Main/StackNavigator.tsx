import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainBottomTabsNavigator } from './BottomTabsNavigator'

export type MainStackParamList = {
  MAIN_BOTTOM_TABS: undefined
  // [PROFILE_SUMMARY]: undefined
}

const Stack = createStackNavigator()

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MAIN_BOTTOM_TABS"
        component={MainBottomTabsNavigator}
        options={{ header: () => null }}
      />
      {/* Usar solamente cuando se necesita una vista que este por encima de los tabs y de todo lo demas */}
      {/* <Stack.Screen
        name="SCREEN_NAME"
        component={COMPONENT_HERE}
        options={{
          title: 'Titulo de saga',
          headerTitleAlign: 'center',
          headerBackTitle: 'Volver',
        }}
      /> */}
    </Stack.Navigator>
  )
}

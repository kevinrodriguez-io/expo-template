import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { First } from 'views/First'
import { Second } from 'views/Second'

const BottomTab = createBottomTabNavigator()

export const MainBottomTabsNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="FIRST"
        component={First}
        options={{
          title: 'First',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-moon"
              color={color}
              size={size}
              solid={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SECOND"
        component={Second}
        options={{
          title: 'Second',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-moon"
              color={color}
              size={size}
              solid={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

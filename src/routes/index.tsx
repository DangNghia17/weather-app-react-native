import React, { useContext } from 'react'

import Home from '../pages/Home'
import Search from '../pages/Search'
import NewsPage from '../pages/New/NewsPage'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components'
import Plances from '../pages/Plances'
import User from '../pages/User'

const Tab = createBottomTabNavigator()

export default function Routes() {
  const { colors } = useContext(ThemeContext)
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.tabBarIconInactiveColor,
        inactiveBackgroundColor: colors.background,
        activeBackgroundColor: colors.tabBarActiveBackgroundColor,
        style: {
          borderTopWidth: 0,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Plances"
        component={Plances}
        options={{
          tabBarLabel: 'Plances',
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsPage}
        options={{
          tabBarLabel: 'New' ,
          tabBarIcon: ({color , size}) => (
            <Icon name="newspaper-outline" color={color} size={size}/>
          ) ,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

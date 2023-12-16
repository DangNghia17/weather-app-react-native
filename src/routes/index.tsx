import React, { useContext } from 'react'

import Home from '../pages/Home'
import Search from '../pages/Search'
import Index from '../pages/New'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components'
import Places from '../pages/Places'
import User from '../pages/User'
import {Image} from "react-native";

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
            <Image source={require('../assets/Icon_Tab/house.png')}
                   style={{width: 25, height: 25, tintColor: color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/Icon_Tab/search.png')}
                   style={{width: 22, height: 21, tintColor: color}}/>
          ),
        }}
      />
       <Tab.Screen
        name="Plances"
        component={Places}
        options={{
          tabBarLabel: 'Plances',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/Icon_Tab/location.png')}
                   style={{width: 20, height: 27, tintColor: color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={Index}
        options={{
          tabBarLabel: 'New' ,
          tabBarIcon: ({color , size}) => (
            <Image source={require('../assets/Icon_Tab/newspaper.png')}
                   style={{width: 22, height: 25, tintColor: color}}/>
                   ) ,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/Icon_Tab/user.png')}
           style={{width: 22, height: 25, tintColor: color}}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

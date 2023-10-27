import 'react-native-gesture-handler'
import mongoose from 'mongoose';

import React, {useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'
import { StatusBar } from 'react-native'
import AppProvider from './hooks'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  )
}

export default App

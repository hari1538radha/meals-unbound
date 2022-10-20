import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterScreen from './src/Screens/SignupPage/SignupPage'
import LoginScreen from './src/Screens/LoginPage/LoginPage'
import Navigation from './src/Navigation'


const App = () => {
  return (
    <View style={{flex:1}}>
     <Navigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
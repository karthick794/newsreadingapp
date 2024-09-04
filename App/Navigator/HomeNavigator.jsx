import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "../screens/Home";
import ReadNews from "../screens/ReadNews";
const Stack=createStackNavigator()
const HomeNavigator = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
   <Stack.Screen name="Home" component={Home}  />
   <Stack.Screen name="Read" component={ReadNews}  />
  </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})
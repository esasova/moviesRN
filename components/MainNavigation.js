import React from 'react'
import Home from '../screens/Home'
import Detail from "../screens/Detail";
import Search from "../screens/Search";
import NavBar from "../screens/NavBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from 'react-native'
import { StackRouter } from 'react-navigation'

const Stack = createNativeStackNavigator();
class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={ 'screen' }>
        <Stack.Screen
        name = 'Home'
        component= { Home }
        options = {{
          headerTransparent: true,
          header: ({ navigation }) => (
            <NavBar navigation= { navigation } main = { true }/>
          )
        }}
       />
        <Stack.Screen
        name = 'Detail'
        component= { Detail }
        options = {{
          headerTransparent: true,
          header: ({ navigation }) => (
            <NavBar navigation= { navigation } main = { false }/>
          )
        }}
       />
        <Stack.Screen
        name = 'Search'
        component= { Search }
        options = {{
          headerTransparent: true,
          header: ({ navigation }) => (
            <NavBar navigation= { navigation } main = { false }/>
          )
        }}
       />
      </Stack.Navigator>

    )
  }
}

export default MainNavigation;

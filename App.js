import React from 'react';
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./components/MainNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screens/Detail';
import Search from './screens/Search';
import "react-native-gesture-handler";



const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
  );

export default App;

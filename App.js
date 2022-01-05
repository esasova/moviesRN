import React from 'react';
import { View, StyleSheet } from "react-native";
import Home from "./screens/Home";


const App = () => (
 

    <View style={styles.container}>
      <Home></Home>
    </View>
  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App;

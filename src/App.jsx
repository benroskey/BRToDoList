import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React /*, { useState }*/ from 'react';
import { StyleSheet } from 'react-native';
import AboutScreen from './screens/About';
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

function App(){
return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
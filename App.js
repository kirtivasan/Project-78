import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from './screens/DailyPic'
import SpaceCraftsScreen from './Screens/SpaceCrafts';
import StarMapScreen from './Screens/StarMap';
import HomeScreen from './Screens/Home';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Screen" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home Screen" component={HomeScreen}/>
        <Stack.Screen name="Daily Pic Screen" component={DailyPicScreen}/>
        <Stack.Screen name="Space Crafts Screen" component={SpaceCraftsScreen}/>
        <Stack.Screen name="Star Map Screen" component={StarMapScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



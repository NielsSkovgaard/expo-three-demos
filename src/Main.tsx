import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReactThreeFiberScreen from './screens/ReactThreeFiberScreen';
import ThreeScreen from './screens/ThreeScreen';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Demos for Expo and Three.js' }}
        />
        <Stack.Screen
          name="Three"
          component={ThreeScreen}
          options={{ title: 'Three' }}
        />
        <Stack.Screen
          name="ReactThreeFiber"
          component={ReactThreeFiberScreen}
          options={{ title: 'React Three Fiber' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

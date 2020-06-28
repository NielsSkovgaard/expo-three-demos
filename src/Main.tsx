import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReactThreeFiberScreen from './screens/ReactThreeFiberScreen';
import ThreeJsScreen from './screens/ThreeJsScreen';
import ThreeJsWithoutOrbitControlsScreen from './screens/ThreeJsWithoutOrbitControlsScreen';

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
          name="ThreeJs"
          component={ThreeJsScreen}
          options={{ title: 'Three.js' }}
        />
        <Stack.Screen
          name="ThreeJsWithoutOrbitControls"
          component={ThreeJsWithoutOrbitControlsScreen}
          options={{ title: 'Three.js (without OrbitControls)' }}
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

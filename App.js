/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import Register from './screens/Register'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            textAlign:'center',
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Login" options={{ title: 'Login' }} component={Login} />
        <Stack.Screen name="Register" options={{ title: 'Register' }} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

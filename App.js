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

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Register/>
      </SafeAreaView>
    </>
  );
};

export default App;

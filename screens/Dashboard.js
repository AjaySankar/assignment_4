import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import UserFeed from './UserFeed';
import NicNames from './Nicknames';
import HashTags from './HashTagsTab';
import NewPostForm from './NewPostForm';

const Tab = createBottomTabNavigator();

const DashBoard = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name="Home" component={UserFeed} />
      <Tab.Screen name="Friends" component={NicNames} />
      <Tab.Screen name="HashTags" component={HashTags} />
      <Tab.Screen name="New" component={NewPostForm} />
    </Tab.Navigator>
  );
};

export default DashBoard;

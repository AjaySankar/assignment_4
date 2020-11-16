import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={UserFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={NicNames}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HashTags"
        component={HashTags}
        options={{
          tabBarLabel: 'HashTags',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="pound" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={NewPostForm}
        options={{
          tabBarLabel: 'New',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashBoard;

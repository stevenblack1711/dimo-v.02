/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import HomeScreen from '../scenes/Home/index';
import SearchingScreen from '../scenes/Searching/index';
import MapsScreen from '../scenes/Maps/index';
import CommentScreen from '../scenes/User/Components/CommentScreen/index';
import LoginScreen from '../scenes/User/Components/LoginScreen/index';
import StoreScreen from '../scenes/StoreScreen/index';
import ReviewScreen from '../scenes/StoreScreen/Component/ReviewScreen/index';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Store: StoreScreen,
    Review: ReviewScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" type="entypo" size={20} color={tintColor} />
      ),
    },
  },
);

const SearchingStack = createStackNavigator(
  {
    SearchingScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search1" type="antdesign" size={20} color={tintColor} />
      ),
    },
  },
);

const UserStack = createStackNavigator(
  {
    Login:  LoginScreen ,
    Comment: CommentScreen,
    Store: StoreScreen,
    Review: ReviewScreen,
  },
  {
    headerMode: 'float',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="user-circle"
          type="font-awesome"
          size={20}
          color={tintColor}
        />
      ),
    },
    initialRouteName: 'Login',
  },
);

const MapsStack = createStackNavigator(
  {
    MapsScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="location-pin" type="entypo" size={20} color={tintColor} />
      ),
    },
  },
);

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchingStack,
    Maps: MapsStack,
    User: UserStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#f4c2c0',
      style: {
        backgroundColor: '#e9928f',
      }
    },

    initialRouteName: 'Home',
  },
);


export default tabNavigator;

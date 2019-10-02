/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import HomeScreen from '../scenes/Home/index';
import SearchingScreen from '../scenes/Searching/index';
import MapsScreen from '../scenes/Maps/index';
import UserScreen from '../scenes/User/index';
import CommentScreen from '../scenes/User/Components/CommentScreen/index';
import LikedScreen from '../scenes/User/Components/LikedScreen/index';
import StoreScreen from '../scenes/StoreScreen/index';


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Store: StoreScreen
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
    User:  UserScreen ,
    Liked:  LikedScreen ,
    Comment: CommentScreen,
    Store: StoreScreen,
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
    initialRouteName: 'User',
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
      activeTintColor: '#e91e63',
      inactiveTintColor: '#808080',
    },

    initialRouteName: 'Home',
  },
);


export default tabNavigator;

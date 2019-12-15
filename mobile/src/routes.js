import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Checkings from '~/pages/Checkings';
import HelpOrders from '~/pages/HelpOrders';
import HelpOrdersInfo from '~/pages/HelpOrders/Info';
import HelpOrdersCreate from '~/pages/HelpOrders/Create';

const BottomTabPages = {
  Checkings: {
    screen: Checkings,
    navigationOptions: {
      tabBarLabel: 'Check-ins',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => (
        <Icon name="edit-location" size={20} color={tintColor} />
      ),
    },
  },
  HelpOrders: {
    screen: createStackNavigator(
      {
        HelpOrders,
        HelpOrdersInfo,
        HelpOrdersCreate,
      },
      {
        defaultNavigationOptions: {
          headerTransparent: true,
          headerBackImage: () => (
            <Icon name="chevron-left" size={24} color="#000" />
          ),
          headerLeftContainerStyle: {
            marginBottom: 8,
          },
        },
      }
    ),
    navigationOptions: {
      tabBarLabel: 'Pedir ajuda',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => (
        <Icon name="live-help" size={20} color={tintColor} />
      ),
    },
  },
};

const BottomTabOptions = {
  resetOnBlur: true,
  tabBarOptions: {
    keyboardHidesTabBar: true,
    activeTintColor: '#EE4E62',
    inactiveTintColor: '#999999',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      height: 70,
    },
  },
};

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(BottomTabPages, BottomTabOptions),
      },
      { initialRouteName: signedIn ? 'App' : 'SignIn' }
    )
  );

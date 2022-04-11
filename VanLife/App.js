import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/home';
import Maps from './src/screens/maps';
import Forums from './src/screens/Forums';
import Login from './src/screens/login';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Maps: {screen: Maps},
  Forum: {screen: Forums},
  Login: {screen: Login},
});

export default createAppContainer(AppNavigator);

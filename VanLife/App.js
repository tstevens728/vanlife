import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/home';
import Maps from './src/screens/maps';
import Forums from './src/screens/Forums';
import Login from './src/screens/login';
import SavedRoutes from './src/screens/savedRoutes';
import Tips from './src/screens/tips';
import TopRoutes from './src/screens/topRoutes';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Maps: {screen: Maps},
  Forum: {screen: Forums},
  Login: {screen: Login},
  SavedRoutes: {screen: SavedRoutes},
  Tips: {screen: Tips},
  TopRoutes: {screen: TopRoutes},
});

export default createAppContainer(AppNavigator);

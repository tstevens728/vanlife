import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/home';
import Maps from './src/screens/maps';

const AppNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  MapsScreen: {screen: Maps},
});

export default createAppContainer(AppNavigator);

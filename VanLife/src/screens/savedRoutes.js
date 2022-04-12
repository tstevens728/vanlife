import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, ImageBackground} from 'react-native';
import Header from '../components/header';

export class SavedRoutes extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header} />
        <View style={styles.container}>
          <Text style={styles.text}> Saved Routes:</Text>
        </View>
      </View>
    );
  }
}

export default SavedRoutes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    height: '100%',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#FFE4C4',
    padding: 10,
  },
});

import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, ImageBackground} from 'react-native';
import Header from '../components/header';

export class tips extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header}></Header>
        <View styles={styles.container}>
          <Text style={styles.text}>Tips for the Road:</Text>
          <Text style={styles.text}>
            {' '}
            {'- Be sure to get rest between driving '}
          </Text>
          <Text style={styles.text}>
            {' '}
            {'- For long trips bring snacks refreshments '}
          </Text>
          <Text style={styles.text}>
            {' '}
            {'- Take emergency supplies like flashlights and first aid '}
          </Text>
          <Text style={styles.text}>
            {' '}
            {'- Be aware of rest stops and construction '}
          </Text>
          <Text style={styles.text}>
            {' '}
            {'- Be aware of the amount of gas in your vehicle '}
          </Text>
          <Text style={styles.text}>
            {''}
            {' - Be wary about taking side roads '}
          </Text>
          <Text style={styles.text}>
            {''}
            {'- More tips coming soon! '}
          </Text>
        </View>
      </View>
    );
  }
}

export default tips;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50%',
  },
  text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import Header from '../components/header';

export class login extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header} />
        <View style={styles.container}>
          <Text> Welcome to Vanlife!</Text>
        </View>
        <View style={styles.log}>
          <Button title="Sign Up" />
          <Button title="Login" />
        </View>
      </View>
    );
  }
}

export default login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 130,
    marginTop: 100,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  log: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#5437',
    borderRadius: 20,
    marginTop: 10,
  },
});

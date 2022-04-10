import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Components/header';

const login = () => {
  return (
    <View>
      <Header style={styles.header} />
      <View style={styles.container}>
        <Text> Welcome to Vanlife!</Text>
      </View>
      <View style={styles.log}>
        <Text> Please press the button below to start:</Text>
        <Text style={styles}> Enter </Text>
      </View>
    </View>
  );
};

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

export default login;

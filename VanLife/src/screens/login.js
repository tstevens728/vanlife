import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, ImageBackground} from 'react-native';
import Header from '../components/header';

export class login extends Component {
  render() {
    return (
      <View>
        <Header style={styles.header} />
        <ImageBackground
          source={require('../components/signinBackdrop.jpg')}
          resizeMode="cover"
          style={styles.ImageBackground}>
          <View style={styles.container}>
            <Text style={styles.text}> Welcome to Vanlife!</Text>
          </View>
          <View style={styles.log}>
            <Button title="Sign Up" color="#696969" />
          </View>
          <View style={styles.log}>
            <Button title="Login" color="#696969" />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50%',
  },
  ImageBackground: {
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

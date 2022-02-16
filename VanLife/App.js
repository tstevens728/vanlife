import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import Header from './Components/header';

export default function App() {
  return (
    <View>
      <Header style={styles.header} />
      <View style={styles.container}>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>{'Maps'}</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>{'Top Routes'}</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>{'Preperation'}</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>{'Connect'}</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>{'Forums'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 65,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 6,
    height: 60,
    width: '80%',
    backgroundColor: '#696969',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

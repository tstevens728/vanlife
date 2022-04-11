import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Van Life</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 20,
    backgroundColor: '#FFE4C4',
  },
  title: {
    textAlign: 'center',
    color: '#696969',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

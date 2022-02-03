import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Header from './Components/header';

export default function App() {
  return (
    <View>
      <Header />
      <Button color="#696969" title="Maps"></Button>
      <Button color="#696969" title="Top Rated Routes"></Button>
      <Button color="#696969" title="Get Ready for the Road"></Button>
      <Button color="#696969" title="Connect"></Button>
      <Button color="#696969" title="Forums"></Button>
    </View>
  );
}

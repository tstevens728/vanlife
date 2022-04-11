import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Header from '../components/header';

export class Maps extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Top Routes"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button
          title="Saved Routes"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }
}
export default Maps;

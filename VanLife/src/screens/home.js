import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('MapsScreen')}
          title="Maps"
        />
      </View>
    );
  }
}

export default Home;

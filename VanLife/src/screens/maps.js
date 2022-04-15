import React, {Component} from 'react';
import {Button, View, Image} from 'react-native';
import Header from '../components/header';

export class Maps extends Component {
  render() {
    return (
      <View>
        <Header />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../components/map.jpg')}
            style={{
              borderColor: 'black',
              borderWidth: 3,
              width: '90%',
              height: '70%',
            }}
          />
          <View
            style={{
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              color="#696969"
              title="Top Routes"
              onPress={() => this.props.navigation.navigate('TopRoutes')}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              color="#696969"
              title="Saved Routes"
              onPress={() => this.props.navigation.navigate('SavedRoutes')}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Maps;

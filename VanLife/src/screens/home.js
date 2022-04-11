import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Header from '../components/header';
export class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Maps')}
            title="Maps"
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Maps')}
            title="Top Routes"
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Forum')}
            title="Forum"
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Maps')}
          title="Planning"
        />
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Sign-In"
          />
        </View>
      </View>
    );
  }
}

export default Home;

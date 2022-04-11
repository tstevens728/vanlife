import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
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

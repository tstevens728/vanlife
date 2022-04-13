import React, {Component} from 'react';
import {Button, View, StyleSheet, ImageBackground} from 'react-native';
import Header from '../components/header';
export class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <ImageBackground
          source={require('../components/homeBackdrop.jpg')}
          resizeMode="cover"
          style={styles.ImageBackground}>
          <View
            style={{
              paddingTop: '20%',
              padding: 20,
              paddingLeft: '20%',
              paddingRight: '20%',
            }}>
            <Button
              color="#696969"
              onPress={() => this.props.navigation.navigate('Maps')}
              title="Maps"
            />
          </View>
          <View
            style={{
              padding: 20,
              paddingLeft: '20%',
              paddingRight: '20%',
            }}>
            <Button
              color="#696969"
              onPress={() => this.props.navigation.navigate('TopRoutes')}
              title="Top Routes"
            />
          </View>
          <View
            style={{
              padding: 20,
              paddingLeft: '20%',
              paddingRight: '20%',
            }}>
            <Button
              color="#696969"
              onPress={() => this.props.navigation.navigate('Forum')}
              title="Forum"
            />
          </View>
          <View
            style={{
              padding: 20,
              paddingLeft: '20%',
              paddingRight: '20%',
            }}>
            <Button
              color="#696969"
              onPress={() => this.props.navigation.navigate('Tips')}
              title="Planning"
            />
          </View>
          <View
            style={{
              padding: 20,
              paddingLeft: '20%',
              paddingRight: '20%',
            }}>
            <Button
              color="#696969"
              onPress={() => this.props.navigation.navigate('Login')}
              title="Sign-In"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: '70%',
  },
  ImageBackground: {
    height: '100%',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
});

export default Home;

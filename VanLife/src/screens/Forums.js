import React, {Component} from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Header from '../components/header';

export class Forums extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <Header style={styles.header} />
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.titleText}> {'Daily Forum'}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumTitle}>
              {' '}
              {'10 Best Cities to Visit In The US'}
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumText}>
              {' '}
              {
                '1. Boston MA, 2. Nashville TN, 3. Los Angeles CA, 4. Houston TX, 5. Dallas TX, 6. Chicago IL, 7. Miami FL, 8. New York City NY, 9. Seatle WA, 10. Portland OR'
              }
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumTitle}> {'Comments'}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumText}>
              {' '}
              {'From User DefaultUser01: This is nice!'}
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumText}>
              {' '}
              {'From User DefaultUser02: Well said!'}
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumText}>
              {' '}
              {'From User DefaultUser03: Ive never been to Boston.'}
            </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.forumText}>
              {' '}
              {
                'From User DefaultUser04: Seatle is only 9th? Underrated for sure!'
              }
            </Text>
          </Text>
          <TextInput
            style={{
              height: 40,
              width: '80%',
              backgroundColor: 'azure',
              padding: 10,
              fontSize: 20,
            }}
            placeholder="Write a post ! "
            onChangeText={text => this.setState({text})}
          />
          <View style={styles.pressableView}>
            <Pressable style={styles.pressable}>
              <Text style={styles.text}>{'Post Comment'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    height: 60,
    backgroundColor: '#696969',
  },
  pressableView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    padding: 2,
  },
  titleText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#696969',
    textDecorationLine: 'underline',
  },
  forumTitle: {
    fontSize: 21,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#696969',
    fontStyle: 'italic',
  },
  forumText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#696969',
  },
});

export default Forums;

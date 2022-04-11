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
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={React.useState(null)}
              value={text}
              placeholder="Enter Comment"
              keyboardType="numeric"
            />
          </SafeAreaView>
          <Pressable style={styles.pressable}>
            <Text style={styles.text}>{'Post Comment'}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
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
  titleText: {
    fontSize: 32,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  forumTitle: {
    fontSize: 21,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  forumText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Forums;

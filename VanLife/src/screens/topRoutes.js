import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  View,
} from 'react-native';
import Header from '../components/header';

const DATA = [
  {
    id: '1',
    title: 'Boston to Miami     Rating: 5/5',
  },
  {
    id: '2',
    title: 'Philadelphia to Los Angeles     Rating: 5/5',
  },
  {
    id: '3',
    title: 'Arizona to Maine    Rating: 4.9/5',
  },
  {
    id: '4',
    title: 'Grand Canyon to Niagra Falls     Rating: 4.9/5',
  },
  {
    id: '5',
    title: 'Portland to Toronto     Rating: 4.7/5',
  },
  {
    id: '6',
    title: 'Space Needle to Mount Rushmore Rating: 4.5/5',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export class TopRoutes extends Component {
  render() {
    const renderItem = ({item}) => <Item title={item.title} />;

    return (
      <View>
        <Header style={styles.header} />
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}> Monthly Top Routes</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default TopRoutes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    height: '100%',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#FFE4C4',
    padding: 10,
  },
  item: {
    backgroundColor: '#FFE4C4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

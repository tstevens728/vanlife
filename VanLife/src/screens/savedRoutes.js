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
    title: 'NewYork to Miami',
  },
  {
    id: '2',
    title: 'Maine to Los Angeles',
  },
  {
    id: '3',
    title: 'Arizona to Maine',
  },
  {
    id: '4',
    title: 'GrandCanyon to Niagra Falls',
  },
  {
    id: '5',
    title: 'Boston to Chicago',
  },
  {
    id: '6',
    title: 'Arizona to Washington D.C.',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export class SavedRoutes extends Component {
  render() {
    const renderItem = ({item}) => <Item title={item.title} />;

    return (
      <View>
        <Header style={styles.header} />
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}> Saved Routes</Text>
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

export default SavedRoutes;

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

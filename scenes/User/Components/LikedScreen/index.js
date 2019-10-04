import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/Entypo';
// import SingleScreen from '../screens/SingleScreen';
let store = require('../../../../utils/store.json');

export default class LikedScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          {
            store.map((item, i) => {
              return (
                <TouchableOpacity key={i} style={styles.storeWrap} onPress={() => this.props.navigation.navigate("Store", {key: item.key})} >
                  <Image
                    style={styles.image}
                    source={{ uri: item.img }}

                  />
                  <View style={styles.textWrap}>
                    <Text style={styles.storeName}>{item.name + ' - ' + item.str}</Text>
                    <Text style={styles.addName}>{item.add}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      <Icon name="location" color="#9e4441" size={16} />
                      <Text style={styles.desStyle}>{'  ' + item.des + 'km'}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }

            )
          }
        </Card>
      </ScrollView>
    )
  }
}
LikedScreen.navigationOptions = {
  title: 'Liked',
  headerStyle: {
    backgroundColor: '#f4afae',
  },
  headerTintColor: '#9e4441',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// const MainNavigator = createStackNavigator({
//   Liked: {screen: LikeScreen},
//   Store: {screen: SingleScreen},
// });

// const LikedScreen = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.6,
    backgroundColor: '#f4afae',
    borderRadius: 15,
    marginTop: -10
  },
  storeWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 360,
    height: 240,
    borderRadius: 10
  },
  textWrap:
  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  storeName: {
    color: '#7f7f7f',
    fontSize: 18,
    fontWeight: '700',
  },
  addName: {
    color: '#7f7f7f',
    fontSize: 16,
    fontWeight: '400',

  },
  desStyle: {
    color: '#9e4441',
    fontSize: 16,
    fontWeight: '700',
  },
  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
});


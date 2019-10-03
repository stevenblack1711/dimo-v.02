import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';

let store = require('../../../../utils/store.json');
let user = require('../../../../utils/user.json');

export default class CommentScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card style={{ padding: 0, flex: 1 }}>
          {
            store.map((item, i) => {
              return (
                <View key={i} style={styles.cmtWrap} >
                  <TouchableOpacity style={styles.storeWrap} onPress={() => this.props.navigation.navigate("Store", {key: item.key})}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.img }}
                    />
                    <View style={styles.textWrap}>
                      <Text style={styles.storeName}>{item.name + ' - ' + item.str}</Text>
                      <Text style={styles.addName}>{item.add}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                        <Icon name="star" color="#9e4441" size={16} />
                        <Text style={styles.addName}>{'  ' + item.point}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.rvStyle}>
                      {item.review[0].rv}
                    </Text>
                    <ScrollView horizontal={true}>
                      {item.review[0].rvImg.map((item, i) => {
                        return (
                          <Image
                            key={i}
                            style={styles.rvImg}
                            source={{ uri: item.imgUrl }}
                          />
                        )
                      })
                      }
                    </ScrollView>
                  </View>
                </View>
              );
            })
          }
        </Card>
      </ScrollView>
    )
  }
}

CommentScreen.navigationOptions = {
  title: 'Comment',
  headerStyle: {
    backgroundColor: '#f4afae',
  },
  headerTintColor: '#9e4441',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cmtWrap: {
    flexDirection: 'column',
    margin: 10
  },
  storeWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 180
  },
  textWrap:
  {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    margin: 10
  },
  storeName: {
    color: '#af7e7c',
    fontSize: 18,
    fontWeight: '700',
  },
  addName: {
    color: '#af7e7c',
    fontSize: 16,
    fontWeight: '700',
  },

  rvStyle: {
    color: '#af7e7c',
    fontSize: 16,
    fontWeight: '400',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  rvImgStyle: {
    flexDirection: 'row'
  },
  rvImg: {
    width: 100,
    height: 100,
    margin: 5
  }
});
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';

let store = require('../../../../utils/store.json');
let user = require('../../../../utils/user.json');

export default class CommentScreen extends Component {

  render() {
    return (
      <FlatList style={styles.container}  data={store}
        renderItem={({item}) => (
          <View  style={styles.cmtWrap} >
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
        )
      }
      
          showsHorizontalScrollIndicator={true}
          keyExtractor={item => item.key}/>
      
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
    margin: 20,
    shadowColor: '#af7e7c',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 3,
    backgroundColor: 'white',
    borderRadius: 15
  },
  storeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 180
  },
  textWrap:
  {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginLeft: 15,
    marginRight: 5,
    width: 280
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
    fontWeight: 'bold',
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
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView} from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';
import {store} from '../../../../utils/store'

 
export default class CommentScreen extends Component {

  render() {
  return (     
        <ScrollView style={styles.container}>
          <Card>
          {
              store.map((item, i) => {
                return (
                  <View key={i} style={styles.storeWrap}>
                    <Image
                      style={styles.image}                    
                      source={{ uri: item.img }}
                    />
                    <View style={styles.textWrap}>
                    <Text style={styles.storeName}>{item.name + ' - ' + item.str}</Text>
                    <Text style={styles.addName}>{item.add}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline' }}>
                      <Icon name="location" color="#9e4441" size={16} />
                <Text style={styles.desStyle}>{'  '+ item.des}</Text>
                    </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  storeName: {
    color: '#7f7f7f',
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '700',
  },
  addName: {
    color: '#7f7f7f',
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '400',

  },
  desStyle: {
    color: '#9e4441',
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '700',
  },
  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  });
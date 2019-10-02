import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
//import store from '../../utils/store.json'

let store = require('../../utils/store.json');
let user = require('../../utils/user.json');

export default class StoreScreen extends Component {

    render() {
        return (
            <View style={styles.container} >
            <ScrollView>
            <View>
                <Image
                style={styles.image}
                source={{ uri: store[1].img }}
                />
                <View style={styles.infoWrap}>               
                    <View style={styles.textWrap}>
                        <Text style={styles.storeName}>{store[1].name + ' - ' + store[1].str}</Text>
                        <Text style={styles.addName}>{store[1].add}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                            <Icon name="location" color="#9e4441" size={16} />
                            <Text style={styles.desStyle}>{'  ' + store[1].des + 'km'}</Text>
                        </View>
                    </View>
                    <View style={styles.pointWrap}>
                        <Text style={styles.pointStyle}>{store[1].point}</Text>
                    </View>
                </View>
            </View>
            <Button color="#e9928f" title="Viết đánh giá"/>
            <View style={styles.cmtWrap}> 
                <View> 
                    <View style={styles.userWrap}>
                        <Image
                            style={styles.userImg}                    
                            source={{ uri: user[0].imgUrl }}
                        />
                        <View style={styles.textWrap}>
                            <Text style={styles.storeName}>{user[0].username}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                            <Icon name="star" color="#9e4441" size={16} />
                            <Text style={styles.addName}>{'  ' + store[0].point}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.rvStyle}>
                          {store[0].review[0].rv}
                        </Text>
                        <ScrollView horizontal={true}>
                        {store[0].review[0].rvImg.map((item, i) => {
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
                </View>
            </ScrollView>
            <Button color="#e9928f" title="Thanh toán bằng MOMO" />
            </View>
        )
    }
}

StoreScreen.navigationOptions = {
    title: store[1].name + ' - ' + store[1].str,
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
    header: {
        flex: 0.6,
        backgroundColor: '#f4afae',
        borderRadius: 15,
        marginTop: -10
    },
    storeWrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10
    },
    image: {
        width: 450,
        height: 200,
        alignItems: 'center',
    },
    infoWrap:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textWrap:
    {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 15
    },
    storeName: {
        color: '#9e4441',
        fontSize: 20,
        fontWeight: '700'
    },
    addName: {
        color: '#9e4441',
        fontSize: 18,
        fontWeight: '700',

    },
    desStyle: {
        color: '#9e4441',
        fontSize: 16,
        fontWeight: '700',
    },
    pointWrap: {
        width: 52,
        height: 52,
        shadowColor: '#af7e7c',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 3,
        backgroundColor: '#9e4441',
        borderRadius: 180,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointStyle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    btnStyle:
    {
        color: '#e9928f',
    },
    cmtWrap: {
        flexDirection: 'column',
        margin: 10
      },
      userWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10
      },
      userImg: {
        width: 50,
        height: 50,
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
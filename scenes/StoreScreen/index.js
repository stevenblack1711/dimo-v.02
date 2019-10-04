import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';


export default class StoreScreen extends Component {


  render() {
    const { navigation } = this.props;
    const _store = navigation.getParam('store', 'NO-Key');
    return (
      <View style={styles.container} >
        <ScrollView>
          <View>
            <IconFeather name="arrow-left" size={32}
              style={{ marginLeft: 5, marginTop: 5 }} onPress={() => navigation.goBack()} />
            <Image
              style={styles.image}
              source={{ uri: _store.logo_url }}
              resizeMode='contain'
            />
            <View style={styles.infoWrap}>
              <View style={styles.textWrap}>
                <Text style={styles.storeName}>{_store.brand + ' - ' + _store.subname}</Text>
                <Text style={styles.addName}>{_store.address}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <IconEntypo name="location" color="#9e4441" size={16} />
                  <Text style={styles.desStyle}>{'  ' + Number(_store.distance).toFixed(2) + ' km'}</Text>
                </View>
              </View>
              <View style={styles.pointWrap}>
                <Text style={styles.pointStyle}>{_store.avg_rating}</Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Review")}>
              <Text style={styles.btnText}>Viết đánh giá</Text>
            </TouchableOpacity>
          </View>
          {/*<View style={styles.cmtWrap}> 
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
                            <Text style={styles.addName}>{'  ' + _store.avg_rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        {/* <Text style={styles.rvStyle}>
                          {store[_key].review[0].rv}
                        </Text> */}
          {/* <ScrollView horizontal={true}>
                        {_store.review[0].rvImg.map((item, i) => {
                            return (
                                <Image
                                  key={i}
                                  style={styles.rvImg}                    
                                  source={{ uri: item.imgUrl }}
                                />
                            )
                            })
                          }                      
                        </ScrollView> }
                    </View>
                      </View>              
                        </View>*/}
        </ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.btnStyle} >
            <Text style={styles.btnText}>THANH TOÁN BẰNG MOMO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}


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
    width: "100%",
    height: 350,
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
  },
  btnText: {
    fontSize: 18,
    color: '#9e4441',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnStyle: {
    shadowColor: 'black',
    shadowOffset: { width: 15, height: 15 },
    shadowRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    minWidth: 420,
    borderTopRightRadius: 30,
    backgroundColor: '#e9928f'
  }
});
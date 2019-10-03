import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import LikedScreen from './Components/LikedScreen'
// import LikedScreen from './Components/LikedScreen/index';
// import CommentScreen from './Components/CommentScreen/index';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';

let users = require('../../utils/user.json');

const list = [
  {
    title: 'Comment',
    nameIcon: 'comment',
    typeIcon: 'material-icons',
    colorIcon: '#9E4441',
    ScreenName: 'Comment'
  },
]

export default class UserScreen extends Component {

  goToOtherScreen = ScreenName => {
    this.props.navigation.navigate(ScreenName);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileWrap}>
            <Image
              style={styles.userImage}
              source={{ uri: users[0].imgUrl }}
            />
            <Text style={styles.userName}>
              {users[0].name}
            </Text>
          </View>
        </View>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.nameIcon, type: item.typeIcon, color: item.colorIcon }}
                bottomDivider
                chevron={{ color: '#9E4441' }}
                onPress={() => this.props.navigation.navigate(item.ScreenName)}
              />
            )
            )
          }
        </View>

      </View>
    )
  }
}

// const MainNavigator = createStackNavigator({
//   Me: { screen: MeScreen },
//   Liked: { screen: LikedScreen },
//   Comment: { screen: CommentScreen },
// });

// const UserScreen = createAppContainer(MainNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.6,
    backgroundColor: '#f4afae',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  profileWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 160,
    height: 160,
    borderRadius: 180
  },
  userName: {
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 6,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  listView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});



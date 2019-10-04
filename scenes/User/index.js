import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import LoginScreen from './Components/LoginScreen/index'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  getCurrentUser,
  isAuthenticated,
  logout,
  subscribeAuthentication,
  unsubscribeAuthentication
} from "./Components/LoginScreen/service/AuthServices"

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

  state = {
    isAuth: isAuthenticated(),
    user: getCurrentUser()
}

componentDidMount() {
    subscribeAuthentication(this._handleAuthChange)
}

componentWillUnmount() {
    unsubscribeAuthentication(this._handleAuthChange)
}

_handleAuthChange = () => {
    this.setState({
        isAuth: isAuthenticated(),
        user: getCurrentUser()
    })
}

_handlePressLogout = () => {
    logout()

    this.props.navigation.navigate('LoginScreen')
}


  render() {
    const {user, isAuth} = this.state
    const name = user.name || 'Guest'
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileWrap}>
            <Image
              style={styles.userImage}
              source={{ uri: users[0].imgUrl }}
            />
            <Text style={styles.userName}>
               {name}
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
        {
                    isAuth &&
                    <TouchableOpacity style={styles.button} onPress={this._handlePressLogout}>
                        <Text style={styles.btnText}>LOGOUT</Text>
                    </TouchableOpacity>
         }
      </View>
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
  button: {
    backgroundColor: '#E9928F',
    minWidth: 150,
    minHeight: 50,
    borderRadius: 15,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
},
btnText:
{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
}
});



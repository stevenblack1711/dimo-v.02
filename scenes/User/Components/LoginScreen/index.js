import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import UserScreen from "../../index"

class LoginScreen extends Component {
    state = {
        action: 'login'
    }

    _handleOnChangeAction = action => {
        this.setState({
            action
        })
    }

    render() {
        const {action} = this.state

        return (
            <View style={styles.container}>
                {
                    action === 'login'
                        ? <LoginForm onAction={this._handleOnChangeAction} {...this.props}/>
                        : <RegisterForm onAction={this._handleOnChangeAction} {...this.props}/>

                }
            </View>
        )
    }
}

LoginScreen.navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4afae',
    },
    headerTintColor: '#9e4441',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  export default createAppContainer(
    createSwitchNavigator({
      LoginScreen: LoginScreen,   
      UserScreen: UserScreen,
    }),
  );
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        width: '100%',
        height: '100%',
    }
})





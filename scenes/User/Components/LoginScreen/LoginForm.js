import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, TextInput, Text, TouchableOpacity, Button, Alert, StyleSheet} from 'react-native'
import {login} from "./service/AuthServices"

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    _handleTextInputChange = (field) => (value) => {
        this.setState({
            [field]: value
        })
    }

    _handlePressLogin = () => {
        const {username, password} = this.state

        if (!username) return Alert.alert('Please enter your username')
        if (!password) return Alert.alert('Please enter your password')

        login({username, password})
            .then(user => {
                this.setState({
                    username: '',
                    password: ''
                })

                this.props.navigation.navigate('UserScreen')
            })
            .catch(error => {
                const {message} = error

                Alert.alert(message)
            })
    }

    _handlePressRegister = () => {
        this.props.onAction('register')
    }

    render() {
        const {username, password} = this.state

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        value={username}
                        fontSize={20}
                        onChangeText={this._handleTextInputChange('username')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        value={password}
                        keyboardType={'numeric'}
                        fontSize={20}
                        onChangeText={this._handleTextInputChange('password')}
                        secureTextEntry={true}/>

                    <TouchableOpacity style={styles.button} onPress={this._handlePressLogin}>
                        <Text style={styles.btnText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._handlePressRegister}>
                        <Text  style={styles.btnText}>Or register now!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#F4C2C0',
    },

    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        marginBottom: 20,
        minWidth: 200,
        textAlign: 'center',
        borderRadius: 15,
        backgroundColor: 'white'
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
})

LoginForm.propTypes = {
    navigation: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
}

export default LoginForm
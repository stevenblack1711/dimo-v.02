import React, {Component} from 'react'
import {View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {register} from "./service/AuthServices"

class RegisterForm extends Component {
    state = {
        username: '',
        name: '',
        password: ''
    }

    _handleTextInputChange = (field) => (value) => {
        this.setState({
            [field]: value
        })
    }

    _handlePressRegister = () => {
        const {username, name, password} = this.state

        if (!username) return Alert.alert('Please enter your username')
        if (!password) return Alert.alert('Please enter your password')
        if (!name) return Alert.alert('Please enter your name')

        register({username, password, name})
            .then(user => {
                this.props.onAction('login')
            })
            .catch(error => {
                const {message} = error

                Alert.alert(message)
            })
    }

    _handlePressGoToLogin = () => {
        this.props.onAction('login')
    }

    render() {
        const {username, name, password} = this.state

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        value={username}
                        onChangeText={this._handleTextInputChange('username')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Full name'
                        value={name}
                        onChangeText={this._handleTextInputChange('name')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        value={password}
                        keyboardType={'numeric'}
                        onChangeText={this._handleTextInputChange('password')}
                        secureTextEntry={true}/>

                    <Button
                        style={styles.button}
                        title='Register' onPress={this._handlePressRegister}/>

                    <TouchableOpacity onPress={this._handlePressGoToLogin}>
                        <Text>Or login now!</Text>
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

    button: {}
})

export default RegisterForm
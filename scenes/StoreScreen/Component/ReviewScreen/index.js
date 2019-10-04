import React, { Component } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'

import {  Rating } from 'react-native-elements';

export default class index extends Component {
      
    render() {
        return (
            <View style={styles.container}>
      
                <Rating
                    count={5}
                    defaultRating={5}
                    size={20}
                    type='star'
                />

                <TextInput
                        style={styles.textInput}
                        placeholder='Bình luận của bạn'/>
                <Button title = 'Đăng'/>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
})

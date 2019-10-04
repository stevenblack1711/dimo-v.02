import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    setTimeout(
      () => {  this.props.navigation.navigate('Main') },
      1000
    )
  }
    render() {
        const viewStyles = [styles.container, { backgroundColor: '#E9928F' }];
        const textStyles = {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        };

        return (
          <View style={viewStyles}>
            <Text style={{fontFamily: 'BDPBIRGULA', fontSize: 50, color: 'white'}}>
              DIMO
            </Text>
          </View>
        );
      }
    }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
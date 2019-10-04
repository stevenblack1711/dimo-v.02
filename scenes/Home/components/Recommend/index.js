import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Separator from '../../../Separator/index';
import Card from './Card/index';
import {withNavigation} from 'react-navigation'

class  index extends Component {
  state = {
    listStore: [],
  };

   componentDidMount = async() => 
  {
    const {listStore} = this.state; 
    const response = await fetch (
      `http://imagecaption.search.mmlab.uit.edu.vn/api/store/user_id=525&lat=10.76211&long=106.70806&km_limit=1`
      );
    const jsonResponse = await response.json();
    this.setState({
    listStore: jsonResponse.data
      });
  }
  
  renderItem = ({item}) => {
    return<Card
    store={item}
  />
  }
  render() {
    const {listStore} = this.state;
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Đề xuất cho bạn</Text>
      <Separator />
      <View style={styles.flatList}>
        <FlatList
          data={listStore}
          renderItem={this.renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    color: '#9e4441',
    fontWeight: 'bold'
  },
  flatList: {
    marginTop: 15,
  },
});

export default withNavigation(index);

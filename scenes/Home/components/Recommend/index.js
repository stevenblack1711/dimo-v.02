import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Separator from '../../../Separator/index';
import Card from './Card/index';
import {withNavigation} from 'react-navigation'

const BRANDS = require('../../../../utils/store.json')

const index = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đề xuất cho bạn</Text>
      <Separator />
      <View style={styles.flatList}>
        <FlatList
          data={BRANDS}
          renderItem={({item}) => (
            <Card
              brand={item}
              // title={item.title}
              // selected={!!selected.get(item.id)}
              // onSelect={onSelect}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

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

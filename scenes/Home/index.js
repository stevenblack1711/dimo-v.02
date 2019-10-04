import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Brands from './components/Brands/index';
import Recommend from './components/Recommend/index';

const index = (props) => {
  return (
    <View style={styles.container}>
          <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.categories}>
          <Categories />
        </View>
        <Brands />
        <Recommend />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categories: {
    flex: 0.3,
    backgroundColor: 'white',
  },
  scrollContainer: {
    marginHorizontal: 15,
  },
});

export default index;

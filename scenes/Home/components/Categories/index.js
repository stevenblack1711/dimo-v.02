import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import Separator from '../../../Separator/index';

const CategoriesIcon = props => {
  return (
    <View style={styles.category}>
      <TouchableOpacity>
        <Icon
          raised
          reverse
          name={props.name}
          type={props.type}
          size={35}
          ontainerStyle={styles.iconContainer}
          color='#9e4441'
          iconStyle={styles.iconStyle}
          onPress={() => console.warn('hello')}
        />
      </TouchableOpacity>
      <Text style={styles.descript}>{props.description}</Text>
    </View>
  );
};

const index = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}>Vị trí của bạn</Text>
      <Separator />
      <ScrollView style={styles.categories} horizontal={true}>
        <CategoriesIcon
          name="food"
          type="material-community"
          description="Thúc ăn"
        />
        <CategoriesIcon name="drink" type="entypo" description="Thức uống" />
        <CategoriesIcon
          name="store-mall-directory"
          type="metarial"
          description="Cửa hàng tiện lợi"
        />
        <CategoriesIcon
          name="movie-filter"
          type="metarial"
          description="Giải trí"
        />
        <CategoriesIcon
          name="movie-filter"
          type="metarial"
          description="Giải trí"
        />
        <CategoriesIcon
          name="movie-filter"
          type="metarial"
          description="Giải trí"
        />
        <CategoriesIcon
          name="movie-filter"
          type="metarial"
          description="Giải trí"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginVertical: 20,
    
  },
  title: {
    fontSize: 25,
    color: '#9e4441',
    fontWeight: 'bold'
  },
  categories: {
    flexDirection: 'row',
    
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
        color: 'white',
        flexDirection: 'row',
  },
  descript: {
    fontSize: 16,
    color: '#9e4441',
    fontWeight: 'bold'
  },
});

export default index;

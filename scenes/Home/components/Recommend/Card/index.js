/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation'

const index = (props) => {
  const { img, name, point, add, key} = props.brand;

  return (
    <TouchableOpacity style={[styles.card]} onPress={() => props.navigation.navigate("Store", {key: key})}>
      <Image
        source={{ uri: img }}
        style={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.name}>{name }</Text>
      <Text style={styles.add}>{add}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" type="material" color="orange" size={20} />
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#9e4441' }}>
          {' '}
          {point}
          <Text style={{ opacity: 0.3, fontWeight: 'bold', color: '#9e4441' }}>/10</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 120,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  img: { width: 120, height: 60 },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  add: {
    fontSize: 14,
    fontWeight: '400', 
    marginTop: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
});

export default withNavigation(index);
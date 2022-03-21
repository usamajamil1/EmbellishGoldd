import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    //backgroundColor: 'gray',
    height: 260,
  },
  buttonText: {
    color: 'red',
    fontSize: 50,
  },

  slide1: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    width: width - 20,
    height: height / 3,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    width: width - 20,
    height: height / 3,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
const dummyData = [
  {
    price: 'Startin at $15',
    pageaddress: 'Pendant',
    url: 'https://embellishgold.com/wp-content/uploads/2022/03/IMG_4554.jpg',
    description: 'Hello description 1',
    id: 1,
  },
  {
    price: 'Startin at $15',
    pageaddress: 'Earring',
    url: 'https://embellishgold.com/wp-content/uploads/2022/03/IMG_4399-300x300.jpg',
    description: 'Hello description 2',
    id: 2,
  },
  {
    price: 'Startin at $15',
    pageaddress: 'Baracelets',
    url: 'https://embellishgold.com/wp-content/uploads/2022/03/IMG_5130-01-300x300.jpg',
    description: 'Hello description 3',
    id: 3,
  },
  {
    price: 'Startin at $15',
    title: 'Hello title 3',
    pageaddress: 'Chains',
    url: 'https://embellishgold.com/wp-content/uploads/2022/03/IMG_4368-1-300x300.jpg',
    description: 'Hello description 4',
    id: 4,
  },
  {
    price: 'Startin at $15',
    title: 'Hello title 3',
    pageaddress: 'Rings',
    url: 'https://embellishgold.com/wp-content/uploads/2022/03/IMG_E4076-01-300x300.jpg',
    description: 'Hello description 4',
    id: 5,
  },
];

function Imageswipper({}) {
  const navigation = useNavigation();

  const Neckles = pageaddress => {
    navigation.navigate(pageaddress);
  };

  return (
    <Swiper
      style={styles.wrapper}
      nextButton={<Text style={styles.buttonText}>›</Text>}
      prevButton={<Text style={styles.buttonText}>‹</Text>}
      showsButtons={true}
      autoplay={true}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            width: 10,
            height: 10,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: 'white',
            width: 10,
            height: 10,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }>
      {/* <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Ok</Text>
      </View> */}
      {dummyData.map(item => (
        <View style={styles.slide1} key={item.url}>
          <TouchableOpacity onPress={() => Neckles(item.pageaddress)}>
            <Image style={styles.slide1} source={{uri: item.url}} />
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
}

export default Imageswipper;

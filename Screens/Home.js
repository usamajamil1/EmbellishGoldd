import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Searchbar} from 'react-native-paper';
import ToolBar from '../components/Toolbar';
import {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../components/Carousel';
import {dummyData} from './Data';
import {ScrollView} from 'react-native-virtualized-view';
import Imageswipper from './Imageswipper';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  // const [images, setimages] = useState([
  //   require('../Images/image1.jpeg'),
  //   require('../Images/image2.jpeg'),
  //   require('../Images/image3.jpeg'),
  //   require('../Images/image4.jpeg'),
  //   require('../Images/image3.jpeg'),
  //   require('../Images/image4.jpeg'),
  //   require('../Images/image1.jpeg'),
  //   require('../Images/image2.jpeg'),
  //   require('../Images/image3.jpeg'),
  //   require('../Images/image4.jpeg'),
  //   require('../Images/image3.jpeg'),
  //   require('../Images/image4.jpeg'),
  // ]);

  const title_address = title => {
    navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <ToolBar title="Logo Space">
          <TouchableOpacity style={{marginRight: 20}}>
            <Ionicons name="notifications-outline" size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconEntypo name="heart-outlined" size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMaterialCommunityIcons
              name="shopping-outline"
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
        </ToolBar>
      </View>

      <View style={styles.footer}>
        <Searchbar placeholder="Search" />
        <ScrollView>
          <View>
            <Imageswipper />
          </View>

          <SafeAreaView>
            <Text style={styles.text_footer}> Shop By Category </Text>
          </SafeAreaView>
          <SafeAreaView>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={true}
              data={dummyData}
              numColumns={2}
              columnWrapperStyle={styles.row}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity onPress={() => title_address(item.title)}>
                    <Image
                      source={{
                        uri: item.url,
                      }} /* Use item to set the image source */
                      key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
                      style={{
                        width: wp('45%'),
                        height: hp('20%'),
                        borderWidth: 2,
                        //borderColor: '#d35647',
                        flexDirection: 'row',
                        margin: 8,
                      }}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.text_title_style}> {item.title} </Text>
                    <Text style={styles.text_title_style_price}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  text_header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  text_footer: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  Icon: {
    alignItems: 'center',
    marginTop: 10,
    right: 100,
  },
  IconEntypoo: {
    marginTop: 10,
    left: 50,
    color: 'black',
  },
  IconMaterialCommunity: {
    marginTop: 10,
    left: 70,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  text_title_style: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  text_title_style_price: {
    alignSelf: 'center',
    fontWeight: '400',
    color: 'black',
  },
});

export default Home;

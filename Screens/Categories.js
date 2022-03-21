import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Animated,
  Dimensions,
  focused,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ToolBar from '../components/Toolbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <ToolBar>
          <TouchableOpacity style={{right: 20}}>
            <Ionicons name="notifications-outline" size={25} color={'black'} />
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
        <ScrollView>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {' '}
            Categories
          </Text>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.Img}
                source={require('../Images/banner1.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.Img}
                source={require('../Images/banner2.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.Img}
                source={require('../Images/banner3.jpg')}
              />
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
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
  icon_bell: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Img: {
    width: width - 20,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});

export default Categories;

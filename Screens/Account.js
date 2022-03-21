import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Avatar,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Animated,
  focused,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ToolBar from '../components/Toolbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useState, useEffect} from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../components/Carousel';
import {dummyData} from '../components/Data';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Account() {
  const navigation = useNavigation();

  const accountverification = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <ToolBar title="Logo Space">
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
          <View style={styles.userRow}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {' '}
                Hey,
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {' '}
                there!
              </Text>
              <TouchableOpacity onPress={() => accountverification()}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'red',
                  }}>
                  {' '}
                  Signip or Login {'  '}
                  <Ionicons
                    name="arrow-forward"
                    //size={hp('3%')}
                    size={wp('5%')}
                    style={{
                      color: focused ? '#e32f45' : 'black',
                    }}
                  />
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.userImg}
                source={require('../Images/profile.png')}
              />
            </View>
          </View>

          {/* <TouchableOpacity> */}
          {/* <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {' '}
                Hey,
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {' '}
                  there!
                </Text>

                <ImageBackground
                  style={styles.userImg}
                  source={require('../Images/profile.png')}
                />
              </View>

              <Text
                style={{
                  fontSize: 15,
                  color: 'red',
                }}>
                {' '}
                Signip or Login {'  '}
                <Ionicons
                  name="arrow-forward"
                  //size={hp('3%')}
                  size={wp('5%')}
                  style={{
                    color: focused ? '#e32f45' : 'black',
                  }}
                />
              </Text>
            </View>
          </TouchableOpacity> */}
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                marginTop: 10,
              }}>
              {' '}
              ORDERS, WISHLIST AND MORE
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                {' '}
                Orders
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                  }}>
                  {' '}
                  Login for order, return & cancellation updates
                </Text>
                <Fontisto name="locked" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                {' '}
                Wishlist
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                  }}>
                  {' '}
                  Login to view items in Wishlist
                </Text>
                <Fontisto name="locked" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                {' '}
                Personal Stylist
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                  }}>
                  {' '}
                  Chat with your personal Embellish Gold Stylist
                </Text>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={25}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                marginTop: 30,
              }}>
              {' '}
              EXCLUSIVE
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {' '}
                Notifications
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                    flexDirection: 'row',
                  }}>
                  {' '}
                  Get updates on latest offers & promotions
                </Text>

                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                marginTop: 30,
              }}>
              {' '}
              SUPPORT
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {' '}
                Chat with us
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                    flexDirection: 'row',
                  }}>
                  {' '}
                  Chat assistance for orders, refunds & cancellations
                </Text>

                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={25}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {' '}
                Help Center
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                    flexDirection: 'row',
                  }}>
                  {' '}
                  Raise a concern or read our FAQs
                </Text>

                <Ionicons
                  name="help-circle-outline"
                  size={25}
                  color={'black'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                marginTop: 30,
              }}>
              {' '}
              PERSONALIZATION
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {' '}
                Profile
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                    flexDirection: 'row',
                  }}>
                  {' '}
                  Login to edit/change your profile details
                </Text>

                <Fontisto name="locked" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {' '}
                Address Book
              </Text>
              <View style={styles.icon_bell}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#666666',
                    flexDirection: 'row',
                  }}>
                  {' '}
                  Login to update shipping address
                </Text>
                <Fontisto name="locked" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#7f7f7f',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
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
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 75,
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingRight: 15,
    paddingTop: 6,
    justifyContent: 'space-between',
  },
});

export default Account;

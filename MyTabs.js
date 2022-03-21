import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  focused,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './Screens/Home';
import Categories from './Screens/Categories';
import Account from './Screens/Account';
//import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
//import Dimension from './theme/Dimension';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function MyTabs() {
  // const fontSizer = screenwidth => {
  //   if (screenwidth > 400) {
  //     console.log('Hello 18');
  //     return 18;
  //   } else if (screenwidth > 250) {
  //     console.log('Hello 15');
  //     return 15;
  //   } else {
  //     console.log('Hello 14');
  //     return 14;
  //   }
  // };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 15,
          color: focused ? '#e32f45' : 'black',
        },

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          height: hp('7%'),
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'column',
                  size: hp('10%'),
                }}>
                <IconEntypo
                  name="home"
                  //size={hp('5%')}
                  size={wp('5%')}
                  style={{
                    color: focused ? '#e32f45' : 'black',
                    // alignItems: 'center',
                    //backgroundColor: 'gray',
                    // alignContent: 'center',
                  }}
                />
              </View>
              {/* <Text
                style={{
                  color: focused ? '#e32f45' : 'black',
                  // flexDirection: 'row',
                  // width: wp('8%'),
                  // justifyContent: 'center',
                  //backgroundColor: 'gray',
                  //fontSize: fontSizer(),
                  // fontSize: fontSizer(height),
                }}>
                Home
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'column',
                  size: hp('10%'),
                }}>
                <IconFontAwesome
                  name="th-large"
                  //size={hp('5%')}
                  size={wp('5%')}
                  style={{
                    color: focused ? '#e32f45' : 'black',
                    // alignItems: 'center',
                    //backgroundColor: 'gray',
                    // alignContent: 'center',
                  }}
                />
              </View>
              {/* <Text
                style={{
                  color: focused ? '#e32f45' : 'black',
                  // flexDirection: 'row',
                  // width: wp('8%'),
                  // justifyContent: 'center',
                  //backgroundColor: 'gray',
                  //fontSize: fontSizer(),
                  // fontSize: fontSizer(height),
                }}>
                Categories
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'column',
                  size: hp('10%'),
                }}>
                <IconFontAwesome
                  name="user"
                  //size={hp('5%')}
                  size={wp('5%')}
                  style={{
                    color: focused ? '#e32f45' : 'black',
                    // alignItems: 'center',
                    //backgroundColor: 'gray',
                    // alignContent: 'center',
                  }}
                />
              </View>
              {/* <Text
                style={{
                  color: focused ? '#e32f45' : 'black',
                  // flexDirection: 'row',
                  // width: wp('8%'),
                  // justifyContent: 'center',
                  //backgroundColor: 'gray',
                  //fontSize: fontSizer(),
                  // fontSize: fontSizer(height),
                }}>
                Account
              </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: width,
      height: height,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconStyle: {
    fontSize: hp('20%'),
    color: 'black',
  },
});
export default MyTabs;

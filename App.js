import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyTabs from './MyTabs';
import Home from './Screens/Home';
import Categories from './Screens/Categories';
import Account from './Screens/Account';
import Imageswipper from './Screens/Imageswipper';
import Pendant from './Screens/Pendant';
import Earring from './Screens/Earring';
import Baracelets from './Screens/Baracelets';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Chains from './Screens/Chains';
import Forgotpassword from './Screens/Forgotpassword';
import Rings from './Screens/Rings';
import Test from './Screens/Test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={MyTabs} name="MyTabs" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Categories} name="Categories" />
        <Stack.Screen component={Account} name="Account" />
        <Stack.Screen component={Imageswipper} name="Imageswipper" />
        <Stack.Screen component={Pendant} name="Pendant" />
        <Stack.Screen component={Earring} name="Earring" />
        <Stack.Screen component={Baracelets} name="Baracelets" />
        <Stack.Screen component={Chains} name="Chains" />
        <Stack.Screen component={Test} name="Test" />
        <Stack.Screen component={Rings} name="Rings" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Forgotpassword} name="Forgotpassword" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

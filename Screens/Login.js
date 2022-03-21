import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  focused,
} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const BLUE = '#428AF8';
  const Light_gray = '#D3D3D3';

  const navigation = useNavigation();

  const regButton = () => {
    navigation.navigate('Register');
  };

  const Forgotpassword = () => {
    navigation.navigate('Forgotpassword');
  };

  const loginButton = async () => {
    if (email == '') {
      alert('Please fill Email Address');
    } else if (password == '') {
      alert('Please fill Password');
    }
  };

  //const image = {uri: 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=20&m=1040250650&s=612x612&w=0&h=lEWpioJ3jet0QIZVBoU2Ygaua8YMHFfHN1mvT28xRZ4='};

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headertextstyle}> Embellish Gold </Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          label="Email"
          onChangeText={email => setEmail(email)}
          value={email}
          keyboardType="email-address"
          left={<TextInput.Icon name="email" />}
          activeUnderlineColor="green"
          underlineColor="gray"
        />
        <TextInput
          style={styles.input}
          label="Password"
          onChangeText={password => setPassword(password)}
          value={password}
          left={<TextInput.Icon name="eye" />}
          secureTextEntry={true}
          activeUnderlineColor="green"
          underlineColor="gray"
        />
        <TouchableOpacity onPress={() => Forgotpassword()}>
          <Text style={{color: 'red', left: 45}}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => loginButton()}>
          <Text style={styles.loginButtonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.regButton} onPress={() => regButton()}>
          <Text style={styles.regButtonText}> Register </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  headertextstyle: {
    fontSize: 40,
    color: '#000000',
    alignSelf: 'center',
    marginTop: '30%',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
  },
  input: {
    alignSelf: 'center',
    height: 60,
    margin: 12,
    width: '80%',
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: 'black',
    marginTop: 40,
    padding: 10,
    height: 40,
    width: '70%',
    alignSelf: 'center',
  },
  regButton: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 10,
    height: 40,
    width: '70%',
    alignSelf: 'center',
    color: 'black',
    borderWidth: 1,
  },
  loginButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
  regButtonText: {
    color: 'black',
    alignSelf: 'center',
  },
});

export default Login;

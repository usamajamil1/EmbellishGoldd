import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

import {TextInput} from 'react-native-paper';

function Register() {
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headertextstyle}> Embellish Gold </Text>
      </View>
      <TextInput
        style={styles.input}
        label="Name"
        onChangeText={fname => setFname(fname)}
        value={fname}
        keyboardType="name-phone-pad"
        activeUnderlineColor="green"
        underlineColor="gray"
      />
      <TextInput
        style={styles.input}
        label="Last Name"
        onChangeText={lname => setLname(lname)}
        value={lname}
        keyboardType="name-phone-pad"
        activeUnderlineColor="green"
        underlineColor="gray"
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          label="Email"
          onChangeText={email => setEmail(email)}
          value={email}
          keyboardType="email-address"
          activeUnderlineColor="green"
          underlineColor="gray"
        />
        <TextInput
          style={styles.input}
          label="Password"
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry={true}
          activeUnderlineColor="green"
          underlineColor="gray"
        />
        <TextInput
          style={styles.input}
          label="Confirm Password"
          onChangeText={cpassword => setCpassword(cpassword)}
          value={cpassword}
          secureTextEntry={true}
          activeUnderlineColor="green"
          underlineColor="gray"
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => loginButton()}>
          <Text style={styles.loginButtonText}> Register </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: '15%',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 3,
  },
  input: {
    alignSelf: 'center',
    height: 60,
    margin: 10,
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

export default Register;

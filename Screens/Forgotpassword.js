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

function Forgotpassword() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headertextstyle}> Recover your password </Text>
      </View>
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

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => loginButton()}>
          <Text style={styles.resetButtonText}> Reset Password </Text>
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
    fontSize: 25,
    color: '#000000',
    alignSelf: 'center',
    marginTop: '20%',
    fontWeight: '500',
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
  resetButton: {
    backgroundColor: 'black',
    marginTop: 40,
    padding: 10,
    height: 40,
    width: '70%',
    alignSelf: 'center',
  },
  resetButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default Forgotpassword;

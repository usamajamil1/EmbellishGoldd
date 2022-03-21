import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Baracelets() {
  return (
    <View style={styles.container}>
      <Text style={styles.Lockettextstyle}>
        Hello Your on Baracelets screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  Lockettextstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Baracelets;

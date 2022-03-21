import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Earring() {
  return (
    <View style={styles.container}>
      <Text style={styles.earringstyle}>Hello Your on Earring Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  earringstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Earring;

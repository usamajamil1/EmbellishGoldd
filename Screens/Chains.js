import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Chains() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Hello Your on Chains Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: 20,
  },
});

export default Chains;

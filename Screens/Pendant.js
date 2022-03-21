import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Pendant() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}> Hello your on Pendant Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Pendant;

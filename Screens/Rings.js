import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Rings() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}> Hello your on Rings Screen</Text>
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

export default Rings;

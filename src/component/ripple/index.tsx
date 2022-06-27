import React from 'react';
import {View, TouchableNativeFeedback, Text, StyleSheet} from 'react-native';

function Ripple() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('gray', false)}
        style={{flex: 1}}>
        <Text>touch me</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Ripple;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    position: 'relative',
  },
});

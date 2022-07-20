import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Title} from 'react-native-paper';

function NoTasksMessage() {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../../assets/image/nocontent.png')}
        resizeMode="center"
        style={{
          height: 220,
          width: 300,
        }}
      />
      <Title>No Task Yet!</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NoTasksMessage;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NoTasksMessage() {
  return (
    <View style={styles.container}>
      <Text>No Tasks!</Text>
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

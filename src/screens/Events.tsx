import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from '../component/navbar';
import {CustomNode, StackProps, BTProps} from '../types';

const Events: CustomNode<StackProps<'Events'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomNode, StackProps} from '../types';

const Settings: CustomNode<StackProps<'Settings'>> = ({navigation}) => {
  return <View style={style.container}></View>;
};

export default Settings;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

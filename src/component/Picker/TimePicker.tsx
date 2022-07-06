import React from 'react';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import Calendar from 'react-native-calendar-picker';
import {CustomModal} from '../../types';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TimePicker = () => {
  return <View style={styles.picker}></View>;
};

export default TimePicker;

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    // height: 50,
    // backgroundColor: 'red',
  },
});

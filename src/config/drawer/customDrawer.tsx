import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, TouchableRipple} from 'react-native-paper';

export default function CustomDrawer(props: any) {
  console.log(props);
  return (
    <View style={style.container}>
      <Card style={style.imageWrapper}>
        <Text>Header</Text>
        <TouchableRipple style={style.avatar}>
          <Text>Touch me</Text>
        </TouchableRipple>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  imageWrapper: {
    padding: 10,
    height: 200,
    position: 'relative',
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Node, ScreenProps} from '../../types';
import BrandLogo from '../brand';

const Navbar = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <BrandLogo />
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('Settings')}
        style={style.button}
        activeOpacity={0.7}>
        <FontAwesome name="cog" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Navbar);

const style = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    // backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 50,
  },
});

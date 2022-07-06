import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BrandLogo from '../brand';
import {COLOR} from '../../config/__config';

const Navbar = ({navigation}) => {
  const scheme = useColorScheme();

  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: scheme === 'dark' ? COLOR.dark : COLOR.light,
        },
      ]}>
      <View style={style.content}>
        <BrandLogo />
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('Search')}
        style={style.button}
        activeOpacity={0.7}>
        <FontAwesome name="search" size={20} />
      </TouchableOpacity>
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
    margin: 5,
  },
});

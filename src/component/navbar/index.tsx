import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Appbar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BrandLogo from '../brand';
import {COLOR} from '../../config/__config';

const Navbar = ({navigation}) => {
  const scheme = useColorScheme();
  const redirectToSettings = React.useCallback(() => {
    return navigation.navigate('Settings');
  }, []);

  const redirectToSearch = React.useCallback(() => {
    return navigation.navigate('Search');
  }, []);

  return (
    <Appbar
      style={[
        style.container,
        {
          backgroundColor: scheme === 'dark' ? COLOR.dark : COLOR.light,
        },
      ]}>
      <Appbar.Content title={<BrandLogo />} />
      <Appbar.Action
        icon={() => {
          return <FontAwesome name="search" size={20} />;
        }}
        onPress={redirectToSearch}
      />
      <Appbar.Action icon="cog-outline" onPress={redirectToSettings} />
    </Appbar>
  );
};

export default React.memo(Navbar);

const style = StyleSheet.create({
  container: {
    padding: 5,
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

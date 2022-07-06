import React from 'react';
import {StyleSheet, View} from 'react-native';
import Image from 'react-native-fast-image';

function BrandLogo() {
  return (
    <View style={style.logo}>
      <Image
        source={require('../../assets/image/icon.png')}
        style={style.image}
      />
    </View>
  );
}

export default BrandLogo;

const style = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    borderRadius: 100,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    height: 80,
    width: 80,
  },
});

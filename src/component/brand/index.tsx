import React from 'react';
import {View} from 'react-native';
import Image from 'react-native-fast-image';

function BrandLogo() {
  return (
    <Image
      source={require('../../assets/image/icon.png')}
      style={{height: 50, width: 50}}
    />
  );
}

export default BrandLogo;

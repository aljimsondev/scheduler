import {useTheme} from '@react-navigation/native';
import React from 'react';
import Image from 'react-native-fast-image';
import {StyleSheet, Text} from 'react-native';
import {Banner, withTheme, useTheme as PaperTheme} from 'react-native-paper';
import {COLOR} from '../../config/__config';

function HomeBanner() {
  const theme = PaperTheme();

  const [visible, setVisible] = React.useState(true);

  const dismissBanner = React.useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Banner
      style={style.container}
      visible={visible}
      actions={[
        {
          label: 'Got it',
          onPress: dismissBanner,
          color: '#fff',
          contentStyle: {
            backgroundColor: COLOR.buttonSecondary,
          },
        },
        {
          label: 'View',
          onPress: () => {},
        },
      ]}>
      You have 9 Tasks for today
    </Banner>
  );
}

export default React.memo(HomeBanner);

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
  },
});

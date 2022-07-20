import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AnimatedFAB} from 'react-native-paper';
import {AnimatedFABType} from '../../types';

const AnimatedFab: AnimatedFABType = ({
  extended = true,
  collapsable = true,
  icon,
  iconMode = 'dynamic',
  onPress,
  label = 'Default Label',
  animateFrom,
  style,
}) => {
  const theme = useTheme();

  return (
    <AnimatedFAB
      extended={extended}
      icon={icon}
      label={label}
      animateFrom={animateFrom}
      onPress={onPress}
      style={[styles.fab, style]}
      collapsable={collapsable}
      iconMode={iconMode}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    zIndex: 1,
  },
});

export default React.memo(AnimatedFab);

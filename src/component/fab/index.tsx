import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {CustomNode, FABProps} from '../../types';

const FloatingActionButton: CustomNode<FABProps> = ({
  onPress,
  style = styles.container,
  children,
  activeOpacity = 0.2,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

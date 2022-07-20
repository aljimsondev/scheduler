import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {COLOR} from '../../config/__config';
import {
  CustomColorValue,
  CustomComponent,
  DialogButtonProps,
} from '../../types';

const renderColor = (color: CustomColorValue | undefined) => {
  switch (color) {
    case 'primary':
      return COLOR.buttonPrimary;
    case 'secondary':
      return COLOR.buttonSecondary;
    case 'warning':
      console.log('called');
      return COLOR.buttonWarning;
    default:
      return COLOR.buttonDefault;
  }
};

const DialogButton: CustomComponent<DialogButtonProps> = ({
  label,
  color,
  mode,
  onPress,
}) => {
  const colorApplied = renderColor(color);
  return (
    <Button mode={mode} color={colorApplied} onPress={onPress}>
      {label}
    </Button>
  );
};

export default React.memo(DialogButton);

import {
  Colors,
  DefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {DarkTheme, LightTheme} from '.';

export const PaperTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: DarkTheme.colors.primary,
    accent: DarkTheme.colors.primary,
  },
};

export const combinedLightTheme = {
  ...PaperTheme,
  ...LightTheme,
  colors: {
    ...PaperTheme.colors,
    ...LightTheme.colors,
  },
};

export const combinedDarkTheme = {
  ...PaperDarkTheme,
  ...DarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...DarkTheme.colors,
  },
};

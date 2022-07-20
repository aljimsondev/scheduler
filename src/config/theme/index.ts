//all theme color goes here

import {DefaultTheme} from '@react-navigation/native';

/**
 * Color cofiguration
 * ```typescript
 * const CustomTheme = {
 * ...DefaultTheme,
 * colors:{ //overide default colors here
 * primary?:"color value",
 * background?:"color value",
 * card?:"color value",
 * text?:"color value",
 * border?:"color value",
 * notification?:"color value"
 * }
 *
 * }
 * ```
 */

export const DarkTheme = {
  dark: true,
  colors: {
    primary: '#620497',
    background: '#292929',
    card: '#202020',
    text: '#FFFFFF',
    border: '#7a7a7a',
    notification: '#7a00be',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#620497',
    background: '#FFFFFF',
    card: '#f8f8f8',
    text: '#0a0a0a',
    border: '#3d3d3d',
    notification: '#7a00be',
  },
};

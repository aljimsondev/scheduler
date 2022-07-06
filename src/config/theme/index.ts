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
    background: '#0a0a0a',
    card: '#202020;',
    text: '#fffff',
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
    card: '#ded5df',
    text: '#333333',
    border: '#3d3d3d',
    notification: '#7a00be',
  },
};

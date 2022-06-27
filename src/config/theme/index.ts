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
    background: '#858383',
    card: '#927b9f',
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
    background: '#E9E9E9',
    card: '#fafafa',
    text: '#333333',
    border: '#dddddd',
    notification: '#7a00be',
  },
};

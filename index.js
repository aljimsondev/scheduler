/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {subscribeToOnNewIntent} from 'react-native-alarm-module';

AppRegistry.registerComponent(appName, () => App);

//adding subscription
subscribeToOnNewIntent(intentArgs => {
  console.log(intentArgs);
});

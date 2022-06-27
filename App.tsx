/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './src/routes/route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  React.useEffect(() => {
    //fetch all data
    //close the splash screen
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => {
      //clean up
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'red'}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <MainScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './src/routes/route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLOR} from './src/config/__config';
import Store from './src/lib/ContextAPI/Store';
import {Provider as PaperProvider} from 'react-native-paper';

function App() {
  const scheme = useColorScheme();

  React.useEffect(() => {
    //fetch all data
    //close the splash screen
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => {
      //clean up
    };
  }, []);

  return (
    <Store>
      <PaperProvider>
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'red'}}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              backgroundColor={scheme === 'dark' ? COLOR.dark : COLOR.light}
              barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <MainScreen />
          </SafeAreaView>
        </GestureHandlerRootView>
      </PaperProvider>
    </Store>
  );
}

export default App;

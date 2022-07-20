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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLOR} from './src/config/__config';
import Store from './src/lib/ContextAPI/Store';
import {DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  combinedDarkTheme,
  combinedLightTheme,
  PaperTheme,
} from './src/config/theme/RNPaperTheme';
import MainScreen from './src/screens/MainScreen';

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
      <PaperProvider
        theme={scheme === 'dark' ? combinedDarkTheme : combinedLightTheme}>
        <GestureHandlerRootView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <StatusBar
              backgroundColor={scheme === 'dark' ? COLOR.dark : COLOR.light}
              barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <MainScreen />
          </View>
        </GestureHandlerRootView>
      </PaperProvider>
    </Store>
  );
}

export default App;

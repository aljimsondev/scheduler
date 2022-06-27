import {NavigationContainerProps, useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../component/navbar';
import {ScreenProps} from '../types';
import BackgroundService from 'react-native-background-actions';
import FloatingActionButton from '../component/fab';

export default function Home(props: ScreenProps) {
  const {navigation} = props;
  const theme = useTheme();
  const sleep = time => {
    return new Promise((resolve: any) => setTimeout(() => resolve(), time));
  };

  // You can do anything in your task such as network requests, timers and so on,
  // as long as it doesn't touch UI. Once your task completes (i.e. the promise is resolved),
  // React Native will go into "paused" mode (unless there are other tasks running,
  // or there is a foreground app).
  const veryIntensiveTask = async taskDataArguments => {
    // Example of an infinite loop task
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        await sleep(delay);
      }
    });
  };

  const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
      delay: 1000,
    },
  };

  async function load() {
    // await BackgroundService.start(veryIntensiveTask, options);
    // await BackgroundService.updateNotification({
    //   taskDesc: 'New ExampleTask description',
    // }); // Only Android, iOS will ignore this call
    // // iOS will also run everything here in the background until .stop() is called
    // await BackgroundService.stop();
  }

  useEffect(() => {
    load();
  }, []);

  const redirectToAdd = () => {
    return navigation.push('AddTodo');
  };
  const handleCardOptions = React.useCallback(() => {
    //open modal
    navigation.navigate('TaskOption');
  }, []);

  return (
    <View style={style.container}>
      <Navbar navigation={navigation} />
      <View style={[style.content, {backgroundColor: theme.colors.card}]}>
        <FloatingActionButton onPress={redirectToAdd} style={style.fab}>
          <Text>Icon</Text>
        </FloatingActionButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  fab: {
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

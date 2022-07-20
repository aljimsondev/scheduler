import React from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Task/Home';
import {useColorScheme, ColorSchemeName, Text, View} from 'react-native';
import Settings from '../screens/Settings';
import AddTodo from '../screens/AddTodo';
import Events from '../screens/Events';
import EventsArchive from '../screens/EventsArchive';
import {DarkTheme, LightTheme} from '../config/theme';
import TaskOption from '../screens/Task/TaskOption';
import {COLOR} from '../config/__config';
import SearchScreen from '../screens/SearchScreen';
import {CustomHeaderStyleType} from '../types';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {Context} from '../lib/ContextAPI/Store';
import {UID} from '../lib/IDGenerator';
import {Snackbar} from 'react-native-paper';
import SearchNavbar from '../component/navbar/SearchNavbar';
import TaskUpdate from '../screens/Task/TaskUpdate';
import {setAlarm, cancelAlarm} from 'react-native-alarm-module';

const Stack = createNativeStackNavigator();

const BottomTabs = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  const theme = useTheme();
  const scheme = useColorScheme();
  const color = (scheme: ColorSchemeName) => {
    let color = theme.colors.primary;
    if (scheme === 'dark') {
      color = '#ffffff';
    }

    return color;
  };
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      activeColor={color(scheme)}
      barStyle={{
        backgroundColor: scheme === 'dark' ? COLOR.dark : COLOR.light,
      }}>
      <BottomTabs.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="list"
                size={22}
                color={focused ? color(scheme) : 'gray'}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        component={Events}
        name="Events"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="calendar"
                size={22}
                color={focused ? color(scheme) : 'gray'}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        component={EventsArchive}
        name="Archive"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="library"
                size={22}
                color={focused ? color(scheme) : 'gray'}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function MainNavigation(props) {
  const scheme = useColorScheme();
  const {task, dispatchTask, dispatchSnackbar} = React.useContext(Context);

  //custom header styling for stack screens
  const customHeaderStyle: CustomHeaderStyleType = {
    backgroundColor: scheme === 'dark' ? COLOR.dark : COLOR.light,
  };

  const onPressSave = () => {
    if (!task.title) return; //task not set
    //add new task
    dispatchTask({
      type: 'ADD_TASK',
      payload: {
        id: '',
        tasks: [],
        task: {
          ...task,
          id: `${new UID(36).set()}`,
        },
      },
    });
    //open snackbar
    dispatchSnackbar({
      type: 'SET_STATUS',
      payload: {
        open: true,
        message: 'New task has been added!',
      },
    });
    setAlarm({
      taskName: task.title, // required
      timestamp: new Date(Date.now() + 5 * 1000).valueOf(), // required
      type: 'setAlarmClock', // optional
      allowedInForeground: true, // optional
      wakeup: true, // optional
      extra: task.description, // optional
    });
  };

  const onPressUpdate = () => {
    if (!task.title) return; //task not set
    //add new task
    dispatchTask({
      type: 'UPDATE_TASK',
      payload: {
        id: '',
        tasks: [],
        task: task,
      },
    });
    //open snackbar
    dispatchSnackbar({
      type: 'SET_STATUS',
      payload: {
        open: true,
        message: `Task has been updated!`,
      },
    });
  };

  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            component={HomeScreen}
            name="Main"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={AddTodo}
            name="AddTodo"
            options={{
              headerShown: true,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              headerTitle: 'Add New Task',
              headerStyle: customHeaderStyle,
              headerRight: props => {
                return (
                  <>
                    <Button
                      mode="contained"
                      style={{
                        borderRadius: 50,
                      }}
                      onPress={onPressSave}>
                      <Text>Save</Text>
                    </Button>
                  </>
                );
              },
            }}
          />
          <Stack.Screen
            component={Settings}
            name="Settings"
            options={{
              headerShown: true,
              presentation: 'modal',
              animation: 'slide_from_right',
              headerStyle: customHeaderStyle,
            }}
          />
          <Stack.Screen
            component={SearchScreen}
            name="Search"
            options={{
              headerShown: true,
              presentation: 'modal',
              animation: 'flip',
              headerStyle: customHeaderStyle,
              headerTitle: props => {
                return <SearchNavbar />;
              },
            }}
          />
          <Stack.Screen
            component={TaskOption}
            name="TaskOption"
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
              animation: 'slide_from_bottom',
              statusBarAnimation: 'slide',
            }}
          />
          <Stack.Screen
            component={TaskUpdate}
            name="TaskUpdate"
            options={{
              headerShown: true,
              animation: 'slide_from_bottom',
              title: 'Update Task',
              headerStyle: customHeaderStyle,
              headerRight: props => {
                return (
                  <>
                    <Button
                      mode="contained"
                      style={{
                        borderRadius: 50,
                      }}
                      onPress={onPressUpdate}>
                      <Text>Update</Text>
                    </Button>
                  </>
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

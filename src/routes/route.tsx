import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FA from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import {View, Text, Button, useColorScheme} from 'react-native';
import Settings from '../screens/Settings';
import AddTodo from '../screens/AddTodo';
import CustomDrawer from '../config/drawer/customDrawer';
import Events from '../screens/Events';
import EventsArchive from '../screens/EventsArchive';
import {DarkTheme, LightTheme} from '../config/theme';
import TaskOption from '../screens/TaskOption';

const Stack = createNativeStackNavigator();

const BottomTabs = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      activeColor="blue"
      barStyle={{
        backgroundColor: '#fff',
      }}>
      <BottomTabs.Screen component={Home} name="Home" />
      <BottomTabs.Screen component={Events} name="Events" />
      <BottomTabs.Screen component={EventsArchive} name="Archive" />
    </BottomTabs.Navigator>
  );
};

export default function MainScreen(props) {
  const scheme = useColorScheme();
  return (
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
          }}
        />
        <Stack.Screen
          component={Settings}
          name="Settings"
          options={{
            headerShown: true,
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          component={TaskOption}
          name="TaskOption"
          options={{
            headerShown: true,
            presentation: 'containedTransparentModal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

type DrawerProps = {
  closeDrawer: () => void;
  openDrawer: () => void;
  toggleDrawer: () => void;
};

export type ScreenProps = {
  navigation: any;
  dispatch: () => void;
  getId: () => void;
  getParent: () => void;
  getState: () => void;
  goBack: () => void;
  isFocused: () => boolean;
  jumpTo: () => void;
  navigate: () => void;
  removeListener: () => void;
  replace: () => void;
  reset: () => void;
  canGoBack: () => void;
  setOptions: () => void;
  setParams: () => void;
  route: RouteProp<ParamListBase, string>;
  pop: () => void;
  popToTop: () => void;
  push: () => void;
  closeDrawer: () => void;
  openDrawer: () => void;
  toggleDrawer: () => void;
};

// type DrawerNavigationProps<T,K>

// export type Node = (props: NativeStackScreenProps<RootStack>) => JSX.Element;

// export type StackProps = ;

export type TaskType = {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  status: string;
};

export type TMAdd = (value: TaskType) => void;

export type CustomNode<T> = (props: T) => JSX.Element;

export type FABProps = {
  onPress: (event: GestureResponderEvent) => void;
  background?: ColorValue;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element;
};

export type TaskCardProps = {
  onPressOption: (event: GestureResponderEvent) => void;
  title: string;
  description?: string;
  date: string;
  time: string;
};

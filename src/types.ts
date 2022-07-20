import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Key} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

export type TaskType = {
  id: string;
  title?: string;
  description?: string;
  date: number;
  status: 'pending' | 'completed';
  repeat: boolean;
};

export type Snackbar = {
  open: boolean;
  message: string;
};

export type CustomColorValue = 'warning' | 'default' | 'primary' | 'secondary';

type CustomComponentMode = 'outlined' | 'contained' | 'text';

type DialogActionType = {
  onPress: () => void;
  label: string;
  options?: {
    color?: CustomColorValue;
    mode?: CustomComponentMode;
  };
};

export type CustomComponent<T> = (props: T) => JSX.Element;

export type DialogButtonProps = {
  label: string;
  color?: CustomColorValue;
  mode?: CustomComponentMode;
  onPress?: () => void;
};

export type Dialog = {
  visible: boolean;
  title: string;
  icon?: null | string;
  content: null | JSX.Element;
  actions: DialogActionType[];
};

export type OnChangeTextHandlerType<S = TaskType> = (
  setState: React.Dispatch<React.SetStateAction<S>>,
  initialValue: S,
  text: string | number | undefined | boolean,
  elementID: string,
) => void;

export type TMAdd = (value: TaskType) => void;

export type FABProps = {
  onPress: (event: GestureResponderEvent) => void;
  background?: ColorValue;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element;
  activeOpacity?: number;
};

export type CustomHeaderStyleType = StyleProp<{
  backgroundColor?: string | undefined;
}>;

export type TaskCardProps = {
  onPressOption: (event: GestureResponderEvent) => void;
  task: TaskType;
};

//react navigation types
export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
  TaskOption: {
    task: TaskType;
  };
  Settings: undefined;
  Events: undefined;
  Search: undefined;
  TaskUpdate: {
    id: string;
  };
};

export type RootBottomTabParamList = {
  Main: undefined;
  Events: undefined;
  Archive: {
    sort: 'asc' | 'desc';
  };
};

type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type BottomTabsScreenProp = MaterialBottomTabScreenProps<
  RootBottomTabParamList,
  'Main'
>;

export type BTProps = BottomTabsScreenProp;

export type StackProps<K extends keyof RootStackParamList> =
  StackScreenProps<K>;

export type CustomNode<T> = (props: T) => JSX.Element;

type CustomModalProps = {
  visible: boolean;
  onDismiss: () => void;
  onSubmit: () => void;
};

//modals
export type CustomModal = (props: CustomModalProps) => JSX.Element;

//Animated FAB

type AnimatedFABProps = {
  style?: ViewStyle;
  extended: boolean;
  label?: string;
  onPress?: () => void;
  icon: IconSource;
  collapsable?: boolean;
  iconMode?: 'dynamic' | 'static';
  animateFrom?: 'right' | 'left';
};

export type AnimatedFABType = (props: AnimatedFABProps) => JSX.Element;

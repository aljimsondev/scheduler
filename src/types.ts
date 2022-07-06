import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
  TaskOption?: TaskType;
  Settings: undefined;
  Events: undefined;
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

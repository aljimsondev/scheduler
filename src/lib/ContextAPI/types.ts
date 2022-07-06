/**
 * this is the  type defination of Context API
 */

import {Reducer} from 'react';
import {Snackbar, TaskType} from '../../types';

type ContextStoreProps = {
  children: JSX.Element;
};

export type ContextStore = (props: ContextStoreProps) => JSX.Element;

export type ContextValuesType = {
  tasks: TaskType[];
  task: TaskType;
  dispatchTask: React.Dispatch<ReducerActionType<TaskReducerActions, TaskType>>;
  setTask: React.Dispatch<React.SetStateAction<TaskType>>;
  snackbar: Snackbar;
  dispatchSnackbar: React.Dispatch<
    SnackbarReducerActionType<SnackbarReducerActions>
  >;
  dismissSnackbar: () => void;
};

export type TaskReducerActions = 'ADD_TASK' | 'UPDATE_TASK' | 'REMOVE_TASK';

export type ReducerActionType<T, P> = {
  type: T;
  payload: {
    id?: string;
    task: P;
  };
};

export type TaskReducerPayload = TaskType;

export type TaskReducerType<P = TaskReducerPayload> = Reducer<
  TaskType[],
  ReducerActionType<TaskReducerActions, P>
>;

//this is for the snackbar

export type SnackbarReducerActions = 'SET_STATUS' | 'RESET_STATUS';

export type SnackbarReducerActionType<T> = {
  type: T;
  payload: {
    open: boolean;
    message: string;
  };
};

export type SnackbarReducerType = Reducer<
  Snackbar,
  SnackbarReducerActionType<SnackbarReducerActions>
>;

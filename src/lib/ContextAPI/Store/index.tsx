import React from 'react';
import {defaultTask} from '../../../config/defaults';
import {Dialog, Snackbar, TaskType} from '../../../types';
import {UID} from '../../IDGenerator';
import {
  defaultDialogStatus,
  defaults,
  defaultSnackbarStatus,
} from '../defaultValues';
import {DialogReducer} from '../Reducers/DialogReducer';
import {SnackbarReducer} from '../Reducers/SnackbarReducer';
import {getItem, TaskReducer} from '../Reducers/TaskReducer';
import {
  ContextStore,
  ContextValuesType,
  DialogReducerType,
  SnackbarReducerType,
  TaskReducerType,
} from '../types';

export const Context = React.createContext<ContextValuesType>(defaults);

const Store: ContextStore = ({children}) => {
  const [tasks, dispatch] = React.useReducer<TaskReducerType, TaskType[]>(
    TaskReducer,
    [],
    () => {
      return [];
    },
  );
  const [snackbar, dispatchSnackbar] = React.useReducer<
    SnackbarReducerType,
    Snackbar
  >(SnackbarReducer, defaultSnackbarStatus, () => {
    return defaultSnackbarStatus;
  });
  const [dialog, dispatchDialog] = React.useReducer<DialogReducerType, Dialog>(
    DialogReducer,
    defaultDialogStatus,
    () => {
      return defaultDialogStatus;
    },
  );
  const [task, setTask] = React.useState<TaskType>(defaultTask);

  const dismissSnackBar = React.useCallback(() => {
    dispatchSnackbar({type: 'RESET_STATUS', payload: defaultSnackbarStatus});
  }, []);

  const dismissDialog = React.useCallback(() => {
    dispatchDialog({type: 'RESET_STATUS', payload: defaultDialogStatus});
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          tasks: tasks,
          dispatchTask: dispatch,
          task: task,
          setTask: setTask,
          snackbar: snackbar,
          dialog: dialog,
          dispatchSnackbar: dispatchSnackbar,
          dismissSnackbar: dismissSnackBar,
          dispatchDialog: dispatchDialog,
          dismissDialog: dismissDialog,
        }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default Store;

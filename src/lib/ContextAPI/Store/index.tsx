import React from 'react';
import {defaultTask} from '../../../config/defaults';
import {Snackbar, TaskType} from '../../../types';
import {UID} from '../../IDGenerator';
import {defaults, defaultSnackbarStatus} from '../defaultValues';
import {SnackbarReducer} from '../Reducers/SnackbarReducer';
import {TaskReducer} from '../Reducers/TaskReducer';
import {
  ContextStore,
  ContextValuesType,
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
  const [task, setTask] = React.useState<TaskType>(defaultTask);

  const fetchTasks = React.useCallback(() => {
    //do fetching for tasks
  }, []);

  React.useEffect(() => {
    //get all tasks
    fetchTasks();
    return () => {
      //clean up function
    };
  }, []);

  const dismissSnackBar = React.useCallback(() => {
    dispatchSnackbar({type: 'RESET_STATUS', payload: defaultSnackbarStatus});
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
          dispatchSnackbar: dispatchSnackbar,
          dismissSnackbar: dismissSnackBar,
        }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default Store;

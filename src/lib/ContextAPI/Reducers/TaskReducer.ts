import {TaskActions} from '../Actions/TaskActions';
import {TaskReducerType} from '../types';
import Storage from 'react-native-encrypted-storage';
import {TaskType} from '../../../types';

const setItem = async (key: string, value: string) => {
  await Storage.setItem(key, value);
};

export const getItem = async (key: string) => {
  const data = await Storage.getItem(key);
  return data;
};

export const TaskReducer: TaskReducerType = (state, action) => {
  switch (action.type) {
    case TaskActions.addTask:
      const tasks = [...state, action.payload.task];
      //save to storage the new state

      setItem('tasks', JSON.stringify(tasks));
      //return tasks

      return tasks;

    case TaskActions.removeTask:
      const filteredTask = state.filter(item => item.id !== action.payload.id);
      //save to storage the new state
      setItem('tasks', JSON.stringify(filteredTask));
      //return tasks
      return filteredTask;

    case TaskActions.updateTask:
      const newState = state.map(item => {
        if (item.id === action.payload.task.id) {
          return {
            date: action.payload.task.date,
            id: action.payload.task.id,
            repeat: action.payload.task.repeat,
            title: action.payload.task.title,
            status: action.payload.task.status,
            description: action.payload.task.description,
          };
        }
        return item;
      });
      //save to storage the new state
      setItem('tasks', JSON.stringify(newState));
      return newState;

    case TaskActions.setTasks:
      //set the tasks
      return action.payload.tasks;
    default:
      return state;
  }
};

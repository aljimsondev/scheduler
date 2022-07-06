import {TaskActions} from '../Actions/TaskActions';
import {TaskReducerType} from '../types';

export const TaskReducer: TaskReducerType = (state, action) => {
  switch (action.type) {
    case TaskActions.addTask:
      console.log(action.payload);
      return [...state, action.payload.task];
    default:
      return state;
  }
};

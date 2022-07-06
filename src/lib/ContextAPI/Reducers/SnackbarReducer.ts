import {TaskActions} from '../Actions/TaskActions';
import {defaultSnackbarStatus} from '../defaultValues';
import {SnackbarReducerType, TaskReducerType} from '../types';

export const SnackbarReducer: SnackbarReducerType = (state, action) => {
  switch (action.type) {
    case TaskActions.setSnackbar:
      const {message, open} = action.payload;
      return {...state, open: open, message: message};
    case TaskActions.resetSnackbar:
      return {
        ...state,
        open: defaultSnackbarStatus.open,
        message: defaultSnackbarStatus.message,
      };
    default:
      return state;
  }
};

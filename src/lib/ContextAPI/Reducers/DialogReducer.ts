import {TaskActions} from '../Actions/TaskActions';
import {DialogReducerType} from '../types';

export const DialogReducer: DialogReducerType = (state, action) => {
  switch (action.type) {
    case TaskActions.setDialog:
      return {
        ...state,
        actions: action.payload.actions,
        content: action.payload.content,
        icon: action.payload.icon,
        title: action.payload.title,
        visible: action.payload.visible,
      };
    case TaskActions.resetDialog:
      return {
        ...state,
        actions: action.payload.actions,
        content: action.payload.content,
        icon: action.payload.icon,
        title: action.payload.title,
        visible: action.payload.visible,
      };
    default:
      return state;
  }
};

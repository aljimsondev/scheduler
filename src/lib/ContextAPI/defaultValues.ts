import {defaultTask} from '../../config/defaults';

export const defaultSnackbarStatus = {
  open: false,
  message: '',
};

export const defaults = {
  tasks: [],
  dispatchTask: () => {},
  task: defaultTask,
  setTask: () => {},
  snackbar: defaultSnackbarStatus,
  dispatchSnackbar: () => {},
  dismissSnackbar: () => {},
};

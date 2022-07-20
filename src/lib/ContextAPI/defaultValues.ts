import {defaultTask} from '../../config/defaults';
import {Dialog} from '../../types';

export const defaultSnackbarStatus = {
  open: false,
  message: '',
};
export const defaultDialogStatus: Dialog = {
  visible: false,
  title: '',
  icon: null,
  content: null,
  actions: [{label: '', onPress: () => {}}],
};

export const defaults = {
  tasks: [],
  dispatchTask: () => {},
  task: defaultTask,
  setTask: () => {},
  snackbar: defaultSnackbarStatus,
  dialog: defaultDialogStatus,
  dispatchSnackbar: () => {},
  dismissSnackbar: () => {},
  dispatchDialog: () => {},
  dismissDialog: () => {},
};

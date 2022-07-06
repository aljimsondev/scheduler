import {UID} from '../lib/IDGenerator';
import {TaskType} from '../types';

export const defaultTask: TaskType = {
  date: Date.now(),
  description: undefined,
  id: '2',
  repeat: false,
  status: 'pending',
  title: undefined,
};

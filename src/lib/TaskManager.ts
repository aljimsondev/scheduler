//manage tasks ex. alarms, date management
import EncyptedStorage from 'react-native-encrypted-storage';
import {TaskType, TMAdd} from '../types';

class TaskManager {
  #tasks = new Set<TaskType>();
  constructor() {}

  isTaskRunning() {
    let running = false;
    this.#tasks.forEach((value, key) => {
      if (value.status === 'pending') {
        running = true;
      }
    });
    return running;
  }
  save() {
    EncyptedStorage.setItem('tasks', JSON.stringify(this.#tasks));
  }
  add: TMAdd = value => {
    this.#tasks.add(value);
  };
  update(id: string) {
    this.#tasks.entries();
  }
}

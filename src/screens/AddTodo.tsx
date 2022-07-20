import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import moment from 'moment';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {CustomNode, StackProps} from '../types';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {OnChangeHandler} from '../lib/onTextChangeHandler';
import {Context} from '../lib/ContextAPI/Store';
import {defaultTask} from '../config/defaults';

const AddTodo: CustomNode<StackProps<'AddTodo'>> = ({navigation}) => {
  const {task, setTask, tasks} = React.useContext(Context);

  const showPicker = (mode: 'date' | 'time') => {
    return DateTimePickerAndroid.open({
      style: {
        backgroundColor: 'red',
      },
      value: new Date(task.date),
      onChange: e => {
        if (e.type === 'set') {
          const {timestamp} = e.nativeEvent;
          OnChangeHandler(setTask, task, timestamp, 'date');
        }
        return;
      },
      mode: mode,
      is24Hour: false,
      minimumDate: new Date(Date.now()),
    });
  };

  const showTimePicker = () => {
    showPicker('time');
  };

  const showDatePicker = () => {
    showPicker('date');
  };
  React.useEffect(() => {
    //if new tasks is added we reset all the task fields
    return () => {
      setTask(defaultTask);
    };
  }, [tasks]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.inputWrapper}>
          <View style={styles.centered}>
            <Text>
              <FaIcon name="edit" size={24} />
            </Text>
            <TextInput
              placeholder="Title"
              value={task.title}
              style={styles.titleText}
              onChangeText={text =>
                OnChangeHandler(setTask, task, text, 'title')
              }
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.start}>
            <Text style={styles.descIcon}>
              <FaIcon name="align-left" size={24} />
            </Text>
            <TextInput
              placeholder="Description(Optional)"
              onChangeText={text =>
                OnChangeHandler(setTask, task, text, 'description')
              }
              value={task.description}
              multiline={true}
              numberOfLines={3}
              style={styles.desc}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.title}>Date and Time:</Text>
          <View style={styles.dateWrapper}>
            <Text>
              <FaIcon name="calendar" size={24} />
            </Text>
            <Text style={styles.date}>{moment(task.date).format('LL')}</Text>
            <IconButton
              icon={() => {
                return <FaIcon name="pencil" size={20} />;
              }}
              onPress={showDatePicker}
            />
          </View>
          <View style={styles.dateWrapper}>
            <Text>
              <FaIcon name="clock-o" size={24} />
            </Text>
            <Text style={styles.time}>{moment(task.date).format('LT')}</Text>
            <IconButton
              icon={() => {
                return <FaIcon name="pencil" size={20} />;
              }}
              onPress={showTimePicker}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.repeatWrapper}>
            <Text>
              <FaIcon name="history" size={24} />
            </Text>
            <Text style={styles.label}>Repeat</Text>
            <Switch
              value={task.repeat}
              onValueChange={value => {
                OnChangeHandler(setTask, task, value, 'repeat');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  titleText: {
    fontSize: 25,
    marginLeft: 20,
    flexGrow: 1,
  },

  desc: {
    marginLeft: 20,
    flex: 1,
    fontSize: 18,
  },
  descIcon: {
    marginTop: 31,
  },
  start: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dateWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    // fontWeight: '600',
    fontSize: 18,
  },
  date: {
    fontWeight: '600',
    fontSize: 15,
    flexGrow: 1,
    marginLeft: 20,
  },
  inputWrapper: {
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
  },
  time: {
    marginLeft: 20,
    flexGrow: 1,
    // fontWeight: '800',
    fontSize: 18,
  },
  repeatWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 20,
    flexGrow: 1,
  },
});

export default AddTodo;

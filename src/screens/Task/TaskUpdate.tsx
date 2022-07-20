import React from 'react';
import {
  View,
  StatusBar,
  useColorScheme,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {defaultTask} from '../../config/defaults';
import {Context} from '../../lib/ContextAPI/Store';
import {CustomNode, StackProps, TaskType} from '../../types';
import {COLOR} from '../../config/__config';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {OnChangeHandler} from '../../lib/onTextChangeHandler';
import {IconButton, Switch} from 'react-native-paper';
import moment from 'moment';

const TaskUpdate: CustomNode<StackProps<'TaskUpdate'>> = ({route}) => {
  const scheme = useColorScheme();
  const {tasks, task, setTask} = React.useContext(Context);

  React.useEffect(() => {
    //set statusbar theme
    setTimeout(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(
        scheme === 'dark' ? COLOR.dark : COLOR.light,
      );
    }, 400);

    //get the task by id
    const mytask =
      tasks.find(task => task.id === route.params.id) || defaultTask;
    setTask(mytask);
    return () => {
      //clean up
      //reset statusbar
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('rgba(0,0,0,0.7)');
    };
  }, []);

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
    console.log(task);

    return () => {
      //clean up
    };
  }, [task]);

  return (
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
            onChangeText={text => OnChangeHandler(setTask, task, text, 'title')}
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
  );
};

export default TaskUpdate;

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

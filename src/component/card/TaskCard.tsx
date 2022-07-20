import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Switch,
  Text,
  SwitchChangeEvent,
  ImageBackground,
} from 'react-native';
import {Divider, IconButton} from 'react-native-paper';
import FA from 'react-native-vector-icons/FontAwesome';
import {CustomNode, TaskCardProps} from '../../types';
import moment from 'moment';
import {COLOR} from '../../config/__config';

const TaskCard: CustomNode<TaskCardProps> = ({onPressOption, task}) => {
  const theme = useTheme();
  const [active, setActive] = React.useState<boolean>(false);
  const icon = () => {
    return <FA name="ellipsis-h" size={22} />;
  };

  const onChangeSwitchState = React.useCallback(
    (event: SwitchChangeEvent) => {
      setActive(prevState => !prevState);
    },
    [active],
  );

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}>
      <View
        style={[styles.cardHeader, {borderBottomColor: theme.colors.border}]}>
        <Text style={styles.cardTitle}>{task.title}</Text>
        <IconButton icon={icon} onPress={onPressOption} />
      </View>
      <Divider />
      <View style={styles.cardBody}>
        {task.description && <Text>{task.description}</Text>}
        <Text style={styles.taskTime}>{moment(task.date).format('LT')}</Text>
        <Text style={styles.taskDate}>{moment(task.date).format('LL')}</Text>
        <View style={styles.mode}>
          <Text>Repeat</Text>
          <Switch
            value={task.repeat}
            onChange={onChangeSwitchState}
            thumbColor={task.repeat ? COLOR.switchActiveThumbColor : undefined}
            trackColor={{true: COLOR.switchActiveTrackColor}}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(TaskCard);

const styles = StyleSheet.create({
  card: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBody: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardTitle: {
    fontSize: 20,
    marginLeft: 20,
  },
  taskTime: {
    fontSize: 25,
    fontWeight: '500',
  },
  taskDate: {
    fontSize: 16,
    fontWeight: '500',
  },
  mode: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

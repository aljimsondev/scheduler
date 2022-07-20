import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Button, Dialog, Divider, Paragraph} from 'react-native-paper';
import {defaultTask} from '../../config/defaults';
import {COLOR} from '../../config/__config';
import {Context} from '../../lib/ContextAPI/Store';
import {CustomNode, StackProps} from '../../types';

const TaskOption: CustomNode<StackProps<'TaskOption'>> = ({
  navigation,
  route,
}) => {
  const scheme = useColorScheme();
  const {dispatchDialog, dismissDialog, dispatchTask, dispatchSnackbar} =
    React.useContext(Context);
  const theme = useTheme();
  const {params} = route;

  React.useEffect(() => {
    //set statusbar theme
    setTimeout(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('rgba(0,0,0,0.7)');
    }, 400);
    return () => {
      //clean up
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(
        scheme === 'dark' ? COLOR.dark : COLOR.light,
      );
    };
  }, []);

  const _goBack = () => {
    let counter = 0;
    counter++;
    if (counter > 1) return;
    navigation.goBack();
  };

  const _goToUpdate = () => {
    navigation.popToTop();
    navigation.navigate('TaskUpdate', {id: params.task.id});
  };

  const _onCancelDialog = () => {
    dismissDialog();
    navigation.popToTop();
  };

  const _onDeleteTask = () => {
    //remove task
    dispatchTask({
      type: 'REMOVE_TASK',
      payload: {id: route.params.task.id, task: defaultTask, tasks: []},
    });
    //show notification
    dispatchSnackbar({
      type: 'SET_STATUS',
      payload: {
        message: 'Task deleted successfully!',
        open: true,
      },
    });
    //close dialog
    dismissDialog();
    //return to main screen
    navigation.popToTop();
  };

  const _handleDelete = () => {
    dispatchDialog({
      type: 'SET_STATUS',
      payload: {
        title: 'Delete Task',
        visible: true,
        content: (
          <>
            <Paragraph>Are you sure you want to delete?</Paragraph>
          </>
        ),
        actions: [
          {
            label: 'Cancel',
            onPress: _onCancelDialog,
            options: {mode: 'text'},
          },
          {
            label: 'Delete',
            onPress: _onDeleteTask,
            options: {
              color: 'warning',
              mode: 'contained',
            },
          },
        ],
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button onPress={_goBack}>Cancel</Button>
        <Divider />
        <Button color={theme.colors.text} onPress={_goToUpdate}>
          Edit
        </Button>
        <Divider />
        <Button mode="text" color="red" onPress={_handleDelete}>
          Delete
        </Button>
        <Divider />
        <Button color={theme.colors.text}>Add to Archive</Button>
      </View>
    </View>
  );
};

export default TaskOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column-reverse',
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingTop: 20,
  },
});

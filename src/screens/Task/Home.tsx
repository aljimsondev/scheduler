import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';
import Navbar from '../../component/navbar';
import {CustomNode, StackProps, TaskType} from '../../types';
import TaskCard from '../../component/card/TaskCard';
import {Context} from '../../lib/ContextAPI/Store';
import NoTasksMessage from '../../component/card/Informative/NoTasks';
import AnimatedFab from '../../component/fab/AnimatedFab';
import Banner from '../../component/banner';
import {defaultTask} from '../../config/defaults';
import {getItem} from '../../lib/ContextAPI/Reducers/TaskReducer';
import Alarm from 'react-native-alarm-manager';

const Home: CustomNode<StackProps<'Home'>> = ({navigation}) => {
  const [isExtended, setExtended] = React.useState<boolean>(true);
  const theme = useTheme();
  const {tasks, dispatchTask} = React.useContext(Context);

  const redirectToAdd = () => {
    return navigation.navigate('AddTodo');
  };

  const handleCardOptions = React.useCallback((task: TaskType) => {
    //open modal
    navigation.navigate('TaskOption', {task: task});
  }, []);

  // const renderItem: ListRenderItem<TaskType> = ({item, index}) => {
  //   return (
  //     <TaskCard
  //       key={item.id + index}
  //       task={item}
  //       onPressOption={() => handleCardOptions(item)}
  //     />
  //   );
  // };
  // const renderItem: ListRenderItem<TaskType> = ({item, index}) => {
  //   return (
  //     <TaskCard
  // key={item.id + index}
  // task={item}
  // onPressOption={() => handleCardOptions(item)}
  //     />
  //   );
  // };
  const renderItem = React.useCallback<ListRenderItem<TaskType>>(
    ({item, index}) => {
      return (
        <TaskCard
          key={item.id + index}
          task={item}
          onPressOption={() => handleCardOptions(item)}
        />
      );
    },
    [tasks],
  );

  const onScroll = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      //handles FAB animation
      const {nativeEvent} = event;
      const currentScrollPosition =
        Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

      setExtended(currentScrollPosition <= 0);
    },
    [],
  );

  //fetch all tasks
  React.useEffect(() => {
    getItem('tasks').then(data => {
      if (!data) return;
      const parsedData: TaskType[] = JSON.parse(data);

      dispatchTask({
        type: 'SET_TASKS',
        payload: {tasks: parsedData, id: '', task: defaultTask},
      });
    });

    return () => {
      //clean up
    };
  }, []);

  return (
    <View style={style.container}>
      <Navbar navigation={navigation} />
      <View style={[style.content, {backgroundColor: theme.colors.background}]}>
        <Banner />
        <AnimatedFab
          icon={'plus'}
          extended={isExtended}
          label="Add New Task"
          onPress={redirectToAdd}
        />

        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={renderItem}
            onScroll={onScroll}
            initialNumToRender={10}
            keyExtractor={item => item.id}
          />
        ) : (
          <NoTasksMessage />
        )}
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  banner: {
    height: 150,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {
    marginTop: 10,
    flex: 1,
    position: 'relative',
  },
  fab: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    elevation: 1,
    zIndex: 1,
  },
});

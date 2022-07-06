import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import Navbar from '../component/navbar';
import {CustomNode, StackProps, TaskType} from '../types';
import BackgroundService from 'react-native-background-actions';
import FloatingActionButton from '../component/fab';
import Icon from 'react-native-vector-icons/Ionicons';
import TaskCard from '../component/card/TaskCard';
import {Context} from '../lib/ContextAPI/Store';
import NoTasksMessage from '../component/card/Informative/NoTasks';
import {Card} from 'react-native-paper';

const Home: CustomNode<StackProps<'Home'>> = ({navigation}) => {
  const theme = useTheme();
  const {tasks} = React.useContext(Context);

  const redirectToAdd = () => {
    return navigation.push('AddTodo');
  };
  const handleCardOptions = React.useCallback(() => {
    //open modal
    navigation.navigate('TaskOption');
  }, []);

  const renderItem: ListRenderItem<TaskType> = ({item}) => {
    return (
      <TaskCard key={item.id} task={item} onPressOption={handleCardOptions} />
    );
  };

  return (
    <View style={style.container}>
      <Navbar navigation={navigation} />
      <Card style={style.banner} elevation={1} mode="elevated">
        <Card.Title title="Welcome User" />
      </Card>
      <View style={[style.content, {backgroundColor: theme.colors.background}]}>
        <FloatingActionButton
          onPress={redirectToAdd}
          activeOpacity={0.5}
          style={[style.fab, {backgroundColor: theme.colors.primary}]}>
          <Icon size={30} name="add" color={'#fff'} />
        </FloatingActionButton>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={renderItem}
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

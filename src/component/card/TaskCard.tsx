import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import FA from 'react-native-vector-icons/FontAwesome';
import {CustomNode, TaskCardProps} from '../../types';

const TaskCard: CustomNode<TaskCardProps> = ({
  onPressOption,
  date,
  time,
  title,
  description,
}) => {
  const icon = () => {
    return <FA name="cog" />;
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text>Some Title</Text>
        <IconButton icon={icon} />
      </View>
      <View style={styles.cardBody}></View>
    </View>
  );
};

export default React.memo(TaskCard);

const styles = StyleSheet.create({
  card: {},
  cardHeader: {},
  cardBody: {},
});

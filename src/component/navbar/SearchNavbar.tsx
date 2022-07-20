import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TextInput, View, useColorScheme} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {COLOR} from '../../config/__config';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const SearchNavbar = props => {
  const {navigation} = props;
  const scheme = useColorScheme();
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: 'green',
          flexDirection: 'row',
        }}>
        <TextInput style={styles.textInput} placeholder="Search..." />
        <View
          style={{
            padding: 10,
            position: 'relative',
            backgroundColor: 'red',
            zIndex: 1,
          }}>
          <FaIcon name="search" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'hidden',
    padding: 2,
    backgroundColor: '#000',
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default React.memo(SearchNavbar);

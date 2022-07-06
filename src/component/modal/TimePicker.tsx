import React from 'react';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import Calendar from 'react-native-calendar-picker';
import {CustomModal} from '../../types';
import {StyleSheet, View, Text} from 'react-native';
import TimePicker from '../Picker/TimePicker';

const TimePickerModal: CustomModal = ({
  visible = false,
  onDismiss,
  onSubmit,
}) => {
  return (
    <>
      <Modal
        contentContainerStyle={{
          backgroundColor: '#fff',
        }}
        visible={visible}
        onDismiss={onDismiss}>
        <View
          accessible={true}
          onAccessibilityTap={() => {
            console.log('clo');
          }}>
          <View style={styles.content}>
            <TimePicker />
            <View style={styles.footer}>
              <Button
                style={{margin: 10, backgroundColor: 'gray'}}
                mode="contained"
                onPress={onDismiss}>
                <Text>Cancel</Text>
              </Button>
              <Button style={{margin: 10}} mode="contained">
                <Text>Done</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TimePickerModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    zIndex: 3,
  },
  content: {
    backgroundColor: '#FFF',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

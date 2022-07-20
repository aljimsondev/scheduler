import React from 'react';
import {View} from 'react-native';
import MainNavigation from '../routes/route';
import {Button, Dialog, Portal, Snackbar, Text} from 'react-native-paper';
import {Context} from '../lib/ContextAPI/Store';
import DialogButton from '../component/button/DialogButton';

function MainScreen() {
  const {snackbar, dismissSnackbar, dialog, dismissDialog} =
    React.useContext(Context);

  console.log(dialog);
  return (
    <View style={{flex: 1}}>
      <Portal>
        <MainNavigation />
        <Snackbar
          visible={snackbar.open}
          duration={2000}
          style={{borderRadius: 10, backgroundColor: '#000'}}
          onDismiss={dismissSnackbar}>
          <Text style={{color: '#fff'}}>{snackbar.message}</Text>
        </Snackbar>
        <Dialog
          visible={dialog.visible}
          dismissable={true}
          onDismiss={dismissDialog}
          theme={{
            roundness: 5,
          }}>
          <Dialog.Title>{dialog.title}</Dialog.Title>
          {dialog.content && <Dialog.Content>{dialog.content}</Dialog.Content>}
          {dialog.actions.length > 0 && (
            <Dialog.Actions>
              {dialog.actions.map((button, index) => {
                return (
                  <DialogButton
                    key={index}
                    label={button.label}
                    onPress={button.onPress}
                    color={button.options?.color}
                    mode={button.options?.mode}
                  />
                );
              })}
            </Dialog.Actions>
          )}
        </Dialog>
      </Portal>
    </View>
  );
}

export default MainScreen;
